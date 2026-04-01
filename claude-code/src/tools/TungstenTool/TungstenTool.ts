// Stub: TungstenTool is an ANT-only tool (tmux-based virtual terminal).
// Only loaded when process.env.USER_TYPE === 'ant', which is never true here.
import { buildTool } from "../../Tool.js";
import { z } from "zod";

export const TungstenTool = buildTool({
	name: "Tungsten",
	description: async () => "ANT-only tool (stub)",
	inputSchema: z.object({}),
	isEnabled: () => false,
	async call() {
		return { type: "text", text: "TungstenTool is not available in this build." };
	},
	isConcurrencySafe: () => false,
	isReadOnly: () => false,
});

export function clearSessionsWithTungstenUsage(): void {}
export function resetInitializationState(): void {}
