import { spawnSync } from 'child_process'

const result = spawnSync('bunx', ['biome', 'format', '--write', 'src/'], {
  stdio: 'inherit',
  shell: false,
})

// Biome exits with 1 when files were changed — that's not an error for --write mode.
// Only treat exit code 2+ as a real failure.
process.exit(result.status !== null && result.status >= 2 ? result.status : 0)
