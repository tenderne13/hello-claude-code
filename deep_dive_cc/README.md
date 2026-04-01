# Claude Code 深度分析（CC 视角）

本目录包含对 Claude Code CLI 工具的全面深度分析，共 10 篇文档，系统地剖析其架构、流程和核心机制。

## 📚 文档导航

### 基础架构层
| 文档 | 内容概览 |
|------|---------|
| [01_architecture_overview.md](./01_architecture_overview.md) | 整体架构设计、分层结构、核心组件关系和数据流向 |
| [02_startup_flow.md](./02_startup_flow.md) | 应用启动流程、初始化步骤、配置加载和运行时准备 |

### 请求处理层
| 文档 | 内容概览 |
|------|---------|
| [03_request_flow.md](./03_request_flow.md) | 用户请求的完整生命周期、消息队列、流式响应处理和多轮对话管理 |
| [04_tool_system.md](./04_tool_system.md) | 工具注册体系、权限上下文、工具调用编排、并发安全性和批处理策略 |

### 系统支撑层
| 文档 | 内容概览 |
|------|---------|
| [05_bridge_system.md](./05_bridge_system.md) | Bridge 机制、跨进程通信、消息传递和事件驱动架构 |
| [06_transport_system.md](./06_transport_system.md) | 传输层实现、WebSocket/SSE/Hybrid 协议支持和流传输优化 |
| [07_state_management.md](./07_state_management.md) | 应用状态管理、Context API 使用、状态持久化和状态机设计 |

### 高级特性层
| 文档 | 内容概览 |
|------|---------|
| [08_mcp_system.md](./08_mcp_system.md) | MCP 协议实现、服务器集成、工具与资源调用机制 |
| [09_compact_system.md](./09_compact_system.md) | 上下文压缩策略、token 优化、消息聚合和历史管理 |
| [10_hooks_system.md](./10_hooks_system.md) | Hooks 系统架构、生命周期钩子、插件集成点和扩展机制 |

## 🎯 阅读建议

### 快速上手（30 分钟）
按顺序阅读：`01_architecture_overview.md` → `02_startup_flow.md` → `03_request_flow.md`

### 深入理解（2-3 小时）
结合用例场景阅读：
- **开发工具集成**：重点关注 `04_tool_system.md` 和 `05_bridge_system.md`
- **性能优化**：重点关注 `06_transport_system.md` 和 `09_compact_system.md`
- **功能扩展**：重点关注 `08_mcp_system.md` 和 `10_hooks_system.md`

### 完整掌握（4-5 小时）
按编号顺序阅读所有 10 篇文档，理解 Claude Code 的完整技术体系。

## 🔑 核心概念速览

### 分层架构
```
CLI 入口层     → 命令层 → 查询引擎层 → 工具层 → 服务层 → 传输层 → 状态层
cli.tsx/main   →  /commands  →  QueryEngine  →  tools  →  services  →  transports  →  state
```

### 请求生命周期
```
用户输入 → 消息队列 → 查询主循环 → API 调用 → 工具执行 → 上下文压缩 → 结果回流
```

### 关键特性
- **工具系统**：动态权限上下文、并发安全批处理、自动编排
- **MCP 集成**：完整的 MCP 协议实现、服务器管理、工具资源调用
- **传输优化**：Hybrid 传输、流式响应、Websocket 支持
- **上下文管理**：消息聚合、token 优化、历史压缩

## 📖 技术栈

- **运行时**：Bun ≥ 1.3.11
- **语言**：TypeScript + TSX（React/Ink 终端 UI）
- **模块系统**：ESM（Monorepo with Bun workspaces）
- **核心框架**：React/Ink（终端 UI）、Commander.js（CLI）、Anthropic SDK

## 🔗 相关资源

- **源代码**：`../claude-code/` - 反编译还原的 Claude Code CLI 完整源码
- **Codex 视角**：`../deep_dive_cx/` - 系统级源码阅读导航
- **Gemini 视角**：`../deep_dive_gm/` - 工程架构分析

## ⚠️ 说明

- 所有文档均使用中文撰写，表达自然流畅，避免机械罗列
- 流程图和时序图使用 Mermaid 格式，复杂架构图使用 draw.io XML 格式
- 文档内容基于源码分析，反映实际实现细节

---

**最后更新**：2026-04-01
