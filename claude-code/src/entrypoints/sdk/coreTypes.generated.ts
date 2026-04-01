// Auto-generated stub from coreSchemas.ts
// Run `bun scripts/generate-sdk-types.ts` to regenerate from Zod schemas.
import type { z } from "zod/v4";
import type {
	ModelUsageSchema,
	OutputFormatTypeSchema,
	BaseOutputFormatSchema,
	JsonSchemaOutputFormatSchema,
	OutputFormatSchema,
	ApiKeySourceSchema,
	ConfigScopeSchema,
	SdkBetaSchema,
	ThinkingAdaptiveSchema,
	ThinkingEnabledSchema,
	ThinkingDisabledSchema,
	ThinkingConfigSchema,
	McpStdioServerConfigSchema,
	McpSSEServerConfigSchema,
	McpHttpServerConfigSchema,
	McpSdkServerConfigSchema,
	McpServerConfigForProcessTransportSchema,
	McpClaudeAIProxyServerConfigSchema,
	McpServerStatusConfigSchema,
	McpServerStatusSchema,
	McpSetServersResultSchema,
	PermissionUpdateDestinationSchema,
	PermissionBehaviorSchema,
	PermissionRuleValueSchema,
	PermissionUpdateSchema,
	PermissionDecisionClassificationSchema,
	PermissionResultSchema,
	PermissionModeSchema,
	HookEventSchema,
	BaseHookInputSchema,
	PreToolUseHookInputSchema,
	PermissionRequestHookInputSchema,
	PostToolUseHookInputSchema,
	PostToolUseFailureHookInputSchema,
	PermissionDeniedHookInputSchema,
	NotificationHookInputSchema,
	UserPromptSubmitHookInputSchema,
	SessionStartHookInputSchema,
	SetupHookInputSchema,
	StopHookInputSchema,
	StopFailureHookInputSchema,
	SubagentStartHookInputSchema,
	SubagentStopHookInputSchema,
	PreCompactHookInputSchema,
	PostCompactHookInputSchema,
	TeammateIdleHookInputSchema,
	TaskCreatedHookInputSchema,
	TaskCompletedHookInputSchema,
	ElicitationHookInputSchema,
	ElicitationResultHookInputSchema,
	ConfigChangeHookInputSchema,
	InstructionsLoadedHookInputSchema,
	WorktreeCreateHookInputSchema,
	WorktreeRemoveHookInputSchema,
	CwdChangedHookInputSchema,
	FileChangedHookInputSchema,
	ExitReasonSchema,
	SessionEndHookInputSchema,
	HookInputSchema,
	AsyncHookJSONOutputSchema,
	SyncHookJSONOutputSchema,
	HookJSONOutputSchema,
	PreToolUseHookSpecificOutputSchema,
	UserPromptSubmitHookSpecificOutputSchema,
	SessionStartHookSpecificOutputSchema,
	SetupHookSpecificOutputSchema,
	SubagentStartHookSpecificOutputSchema,
	PostToolUseHookSpecificOutputSchema,
	PostToolUseFailureHookSpecificOutputSchema,
	PermissionDeniedHookSpecificOutputSchema,
	NotificationHookSpecificOutputSchema,
	PermissionRequestHookSpecificOutputSchema,
	ElicitationHookSpecificOutputSchema,
	ElicitationResultHookSpecificOutputSchema,
	CwdChangedHookSpecificOutputSchema,
	FileChangedHookSpecificOutputSchema,
	WorktreeCreateHookSpecificOutputSchema,
	PromptRequestOptionSchema,
	PromptRequestSchema,
	PromptResponseSchema,
	SlashCommandSchema,
} from "./coreSchemas.js";

export type ModelUsage = z.infer<ReturnType<typeof ModelUsageSchema>>;
export type OutputFormatType = z.infer<ReturnType<typeof OutputFormatTypeSchema>>;
export type BaseOutputFormat = z.infer<ReturnType<typeof BaseOutputFormatSchema>>;
export type JsonSchemaOutputFormat = z.infer<ReturnType<typeof JsonSchemaOutputFormatSchema>>;
export type OutputFormat = z.infer<ReturnType<typeof OutputFormatSchema>>;
export type ApiKeySource = z.infer<ReturnType<typeof ApiKeySourceSchema>>;
export type ConfigScope = z.infer<ReturnType<typeof ConfigScopeSchema>>;
export type SdkBeta = z.infer<ReturnType<typeof SdkBetaSchema>>;
export type ThinkingAdaptive = z.infer<ReturnType<typeof ThinkingAdaptiveSchema>>;
export type ThinkingEnabled = z.infer<ReturnType<typeof ThinkingEnabledSchema>>;
export type ThinkingDisabled = z.infer<ReturnType<typeof ThinkingDisabledSchema>>;
export type ThinkingConfig = z.infer<ReturnType<typeof ThinkingConfigSchema>>;
export type McpStdioServerConfig = z.infer<ReturnType<typeof McpStdioServerConfigSchema>>;
export type McpSSEServerConfig = z.infer<ReturnType<typeof McpSSEServerConfigSchema>>;
export type McpHttpServerConfig = z.infer<ReturnType<typeof McpHttpServerConfigSchema>>;
export type McpSdkServerConfig = z.infer<ReturnType<typeof McpSdkServerConfigSchema>>;
export type McpServerConfigForProcessTransport = z.infer<ReturnType<typeof McpServerConfigForProcessTransportSchema>>;
export type McpClaudeAIProxyServerConfig = z.infer<ReturnType<typeof McpClaudeAIProxyServerConfigSchema>>;
export type McpServerStatusConfig = z.infer<ReturnType<typeof McpServerStatusConfigSchema>>;
export type McpServerStatus = z.infer<ReturnType<typeof McpServerStatusSchema>>;
export type McpSetServersResult = z.infer<ReturnType<typeof McpSetServersResultSchema>>;
export type PermissionUpdateDestination = z.infer<ReturnType<typeof PermissionUpdateDestinationSchema>>;
export type PermissionBehavior = z.infer<ReturnType<typeof PermissionBehaviorSchema>>;
export type PermissionRuleValue = z.infer<ReturnType<typeof PermissionRuleValueSchema>>;
export type PermissionUpdate = z.infer<ReturnType<typeof PermissionUpdateSchema>>;
export type PermissionDecisionClassification = z.infer<ReturnType<typeof PermissionDecisionClassificationSchema>>;
export type PermissionResult = z.infer<ReturnType<typeof PermissionResultSchema>>;
export type PermissionMode = z.infer<ReturnType<typeof PermissionModeSchema>>;
export type HookEvent = z.infer<ReturnType<typeof HookEventSchema>>;
export type BaseHookInput = z.infer<ReturnType<typeof BaseHookInputSchema>>;
export type PreToolUseHookInput = z.infer<ReturnType<typeof PreToolUseHookInputSchema>>;
export type PermissionRequestHookInput = z.infer<ReturnType<typeof PermissionRequestHookInputSchema>>;
export type PostToolUseHookInput = z.infer<ReturnType<typeof PostToolUseHookInputSchema>>;
export type PostToolUseFailureHookInput = z.infer<ReturnType<typeof PostToolUseFailureHookInputSchema>>;
export type PermissionDeniedHookInput = z.infer<ReturnType<typeof PermissionDeniedHookInputSchema>>;
export type NotificationHookInput = z.infer<ReturnType<typeof NotificationHookInputSchema>>;
export type UserPromptSubmitHookInput = z.infer<ReturnType<typeof UserPromptSubmitHookInputSchema>>;
export type SessionStartHookInput = z.infer<ReturnType<typeof SessionStartHookInputSchema>>;
export type SetupHookInput = z.infer<ReturnType<typeof SetupHookInputSchema>>;
export type StopHookInput = z.infer<ReturnType<typeof StopHookInputSchema>>;
export type StopFailureHookInput = z.infer<ReturnType<typeof StopFailureHookInputSchema>>;
export type SubagentStartHookInput = z.infer<ReturnType<typeof SubagentStartHookInputSchema>>;
export type SubagentStopHookInput = z.infer<ReturnType<typeof SubagentStopHookInputSchema>>;
export type PreCompactHookInput = z.infer<ReturnType<typeof PreCompactHookInputSchema>>;
export type PostCompactHookInput = z.infer<ReturnType<typeof PostCompactHookInputSchema>>;
export type TeammateIdleHookInput = z.infer<ReturnType<typeof TeammateIdleHookInputSchema>>;
export type TaskCreatedHookInput = z.infer<ReturnType<typeof TaskCreatedHookInputSchema>>;
export type TaskCompletedHookInput = z.infer<ReturnType<typeof TaskCompletedHookInputSchema>>;
export type ElicitationHookInput = z.infer<ReturnType<typeof ElicitationHookInputSchema>>;
export type ElicitationResultHookInput = z.infer<ReturnType<typeof ElicitationResultHookInputSchema>>;
export type ConfigChangeHookInput = z.infer<ReturnType<typeof ConfigChangeHookInputSchema>>;
export type InstructionsLoadedHookInput = z.infer<ReturnType<typeof InstructionsLoadedHookInputSchema>>;
export type WorktreeCreateHookInput = z.infer<ReturnType<typeof WorktreeCreateHookInputSchema>>;
export type WorktreeRemoveHookInput = z.infer<ReturnType<typeof WorktreeRemoveHookInputSchema>>;
export type CwdChangedHookInput = z.infer<ReturnType<typeof CwdChangedHookInputSchema>>;
export type FileChangedHookInput = z.infer<ReturnType<typeof FileChangedHookInputSchema>>;
export type ExitReason = z.infer<ReturnType<typeof ExitReasonSchema>>;
export type SessionEndHookInput = z.infer<ReturnType<typeof SessionEndHookInputSchema>>;
export type HookInput = z.infer<ReturnType<typeof HookInputSchema>>;
export type AsyncHookJSONOutput = z.infer<ReturnType<typeof AsyncHookJSONOutputSchema>>;
export type SyncHookJSONOutput = z.infer<ReturnType<typeof SyncHookJSONOutputSchema>>;
export type HookJSONOutput = z.infer<ReturnType<typeof HookJSONOutputSchema>>;
export type PreToolUseHookSpecificOutput = z.infer<ReturnType<typeof PreToolUseHookSpecificOutputSchema>>;
export type UserPromptSubmitHookSpecificOutput = z.infer<ReturnType<typeof UserPromptSubmitHookSpecificOutputSchema>>;
export type SessionStartHookSpecificOutput = z.infer<ReturnType<typeof SessionStartHookSpecificOutputSchema>>;
export type SetupHookSpecificOutput = z.infer<ReturnType<typeof SetupHookSpecificOutputSchema>>;
export type SubagentStartHookSpecificOutput = z.infer<ReturnType<typeof SubagentStartHookSpecificOutputSchema>>;
export type PostToolUseHookSpecificOutput = z.infer<ReturnType<typeof PostToolUseHookSpecificOutputSchema>>;
export type PostToolUseFailureHookSpecificOutput = z.infer<
	ReturnType<typeof PostToolUseFailureHookSpecificOutputSchema>
>;
export type PermissionDeniedHookSpecificOutput = z.infer<ReturnType<typeof PermissionDeniedHookSpecificOutputSchema>>;
export type NotificationHookSpecificOutput = z.infer<ReturnType<typeof NotificationHookSpecificOutputSchema>>;
export type PermissionRequestHookSpecificOutput = z.infer<ReturnType<typeof PermissionRequestHookSpecificOutputSchema>>;
export type ElicitationHookSpecificOutput = z.infer<ReturnType<typeof ElicitationHookSpecificOutputSchema>>;
export type ElicitationResultHookSpecificOutput = z.infer<ReturnType<typeof ElicitationResultHookSpecificOutputSchema>>;
export type CwdChangedHookSpecificOutput = z.infer<ReturnType<typeof CwdChangedHookSpecificOutputSchema>>;
export type FileChangedHookSpecificOutput = z.infer<ReturnType<typeof FileChangedHookSpecificOutputSchema>>;
export type WorktreeCreateHookSpecificOutput = z.infer<ReturnType<typeof WorktreeCreateHookSpecificOutputSchema>>;
export type PromptRequestOption = z.infer<ReturnType<typeof PromptRequestOptionSchema>>;
export type PromptRequest = z.infer<ReturnType<typeof PromptRequestSchema>>;
export type PromptResponse = z.infer<ReturnType<typeof PromptResponseSchema>>;
export type SlashCommand = z.infer<ReturnType<typeof SlashCommandSchema>>;
