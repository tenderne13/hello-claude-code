// Stub: ConnectorText is an Anthropic-internal feature (feature flag CONNECTOR_TEXT, always false).

export type ConnectorTextBlock = {
	type: "connector_text";
	text: string;
};

export type ConnectorTextDelta = {
	type: "connector_text_delta";
	text: string;
};

export function isConnectorTextBlock(block: unknown): block is ConnectorTextBlock {
	return false;
}
