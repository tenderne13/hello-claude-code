# AGENTS.md

This file provides guidance for agentic coding agents working in this repository.

## Project Overview

This is a **reverse-engineered / decompiled** version of Anthropic's Claude Code CLI. The codebase has ~1341 tsc errors from decompilation — these do **not** block Bun runtime. Do not attempt to "fix" all tsc errors.

- **Runtime**: Bun (not Node.js), requires >= 1.3.11
- **Language**: TypeScript + TSX (React/Ink terminal UI)
- **Module system**: ESM (`"type": "module"`)
- **Monorepo**: Bun workspaces with internal packages in `packages/`

## Build / Lint / Test Commands

All commands run in the `claude-code/` directory:

```bash
bun install          # Install dependencies
bun run dev          # Dev mode (direct execution via Bun)
bun run build        # Build: outputs dist/cli.js (~25MB)
bun run lint         # Biome lint check
bun run lint:fix     # Biome lint with auto-fix
bun run format       # Biome format (writes to files)
bun test             # Run tests with Bun
bun run check:unused # Check for unused dependencies (knip)
```

### Running a Single Test

```bash
# Run a specific test file
bun test src/path/to/testFile.test.ts

# Run tests matching a pattern
bun test --test-name-pattern "tool.*"
```

## Code Style Guidelines

### General Approach

This codebase uses **Biome** for linting with a lenient configuration. Many rules are disabled to accommodate decompiled code patterns. Follow existing patterns in each file.

### Formatting

- **Formatter is DISABLED** (`formatter.enabled: false` in biome.json)
- Indentation: Tabs
- Line width: 120 characters
- JavaScript quotes: Double quotes

### TypeScript

- **Strict mode is OFF** (`strict: false` in tsconfig.json)
- **skipLibCheck is ON** — don't worry about third-party type errors
- Common decompilation types: `unknown`, `never`, `{}` — these are normal
- Path alias: `src/*` maps to `./src/*` — use imports like `import { ... } from 'src/utils/...'`

### Naming Conventions

Follow existing patterns in each module. No strict enforced rules.

### React/Ink Components

- Components use React Compiler runtime — decompiled memoization boilerplate (`const $ = _c(N)`) is **normal**
- This is a terminal UI using Ink (React for CLI), not web React

### Imports

- ESM imports: `import { x } from 'module'`
- Internal path alias: `import { ... } from 'src/utils/...'`
- `bun:bundle` import for feature flags works at build time; dev-time polyfill provided in `cli.tsx`

## Special Code Patterns

### Feature Flag System

All `feature('FLAG_NAME')` calls return `false` (polyfilled in `cli.tsx`). Any code behind a feature flag is **dead code** in this build. Do not attempt to enable feature flags.

### Stub Packages

These packages return null/false/[] — they are stubs, not real implementations:
- `audio-capture-napi`
- `image-processor-napi`
- `modifiers-napi`
- `url-handler-napi`
- `@ant/*` packages

### Bundle API

In `src/main.tsx` and other files, `import { feature } from 'bun:bundle'` works at build time. At dev-time, the polyfill in `src/entrypoints/cli.tsx` provides `feature()`.

## What NOT to Fix

1. **Tsc errors** — ~1341 type errors from decompilation don't affect runtime
2. **Feature flag branches** — always return false, code is dead
3. **React Compiler memoization boilerplate** — `_c(N)` calls are normal decompilation output
4. **Stub packages** — don't implement real functionality for stubbed modules

## File Organization

```
claude-code/
├── src/
│   ├── entrypoints/     # CLI entry points (cli.tsx, init.ts)
│   ├── commands/         # Slash commands (/xxx)
│   ├── components/       # React/Ink UI components
│   ├── screens/          # REPL screen and overlays
│   ├── services/         # API, MCP, compact, oauth, plugins
│   ├── state/            # AppState, Zustand store
│   ├── tools/            # Tool implementations (BashTool, etc.)
│   ├── ink/              # Custom Ink framework (reconciler, hooks)
│   ├── utils/            # Utilities
│   └── types/            # TypeScript type definitions
├── packages/             # Internal monorepo packages
│   └── @ant/             # Stub packages (Computer Use, Chrome MCP)
└── dist/                 # Build output
```

## Git Commit Convention

When committing code, add this co-author trailer:

```
Co-authored-by: Claude <claude@anthropic.com>
```

## Architecture Summary

```
CLI Entry → commands/ → QueryEngine → query.ts → tools.ts → services/api/
                                                        ↓
                                              tools/ (BashTool, etc.)
```

- `src/main.tsx` — Commander.js CLI, parses args, launches REPL or pipe mode
- `src/query.ts` — Main API query loop (streaming, tool calls, conversation turns)
- `src/QueryEngine.ts` — Orchestrator managing state, compaction, attribution
- `src/screens/REPL.tsx` — Interactive terminal UI (5000+ lines)
- `src/services/api/claude.ts` — API client (Anthropic/Bedrock/Vertex/Azure)
- `src/tools.ts` — Tool registry, assembles tools by permission context
