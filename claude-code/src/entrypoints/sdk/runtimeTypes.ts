// Stub: SDK runtime types (non-serializable callbacks and interfaces).
import type { z, ZodRawShape } from "zod/v4";
import type { SDKMessage, SDKResultMessage, SDKUserMessage, SDKSessionInfo, McpServerStatus } from "./coreTypes.js";

export type AnyZodRawShape = ZodRawShape;
export type InferShape<T extends AnyZodRawShape> = z.infer<z.ZodObject<T>>;

export type EffortLevel = "low" | "normal" | "high" | "max";

export type Options = {
	apiKey?: string;
	model?: string;
	maxTurns?: number;
	cwd?: string;
	systemPrompt?: string;
	appendSystemPrompt?: string;
	allowedTools?: string[];
	disallowedTools?: string[];
	mcpServers?: Record<string, unknown>;
	permissionMode?: string;
	verbose?: boolean;
	effortLevel?: EffortLevel;
};

export type InternalOptions = Options & {
	agentId?: string;
	parentAgentId?: string;
};

export type SDKSessionOptions = Options;

export type SessionMutationOptions = {
	sessionId: string;
};

export type GetSessionMessagesOptions = {
	sessionId: string;
	limit?: number;
	before?: string;
};

export type ListSessionsOptions = {
	limit?: number;
	before?: string;
};

export type GetSessionInfoOptions = {
	sessionId: string;
};

export type ForkSessionOptions = {
	sessionId: string;
	messageIndex?: number;
};

export type ForkSessionResult = {
	sessionId: string;
};

export type SessionMessage = {
	id: string;
	role: "user" | "assistant";
	content: unknown;
	createdAt: string;
};

export type McpSdkServerConfigWithInstance = {
	type: "sdk";
	name: string;
	instance?: unknown;
};

export type SdkMcpToolDefinition<Schema extends AnyZodRawShape = AnyZodRawShape> = {
	name: string;
	description: string;
	inputSchema: z.ZodObject<Schema>;
	handler: (args: InferShape<Schema>, extra: unknown) => Promise<unknown>;
	annotations?: unknown;
	searchHint?: string;
	alwaysLoad?: boolean;
};

export interface Query {
	messages(): AsyncGenerator<SDKMessage>;
	result(): Promise<SDKResultMessage>;
	abort(): void;
}

export type InternalQuery = Query;

export interface SDKSession {
	id: string;
	sendMessage(message: SDKUserMessage): Query;
	abort(): void;
	getMessages(): Promise<SessionMessage[]>;
	getInfo(): Promise<SDKSessionInfo>;
}

export type OnMcpServerStatusChange = (status: McpServerStatus) => void;
