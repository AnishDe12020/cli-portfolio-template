import React, { FC } from "react";
import { Box, Text } from "ink";

const Field: FC<{ fieldKey: string; children: any }> = ({
	fieldKey,
	children,
}) => (
	<Box>
		<Text color="green">me</Text>
		<Text color="white">.</Text>
		<Text color="cyan">{fieldKey}</Text>
		<Text color="green"> = </Text>
		<Text color="yellow">"{children}"</Text>
	</Box>
);

export default Field;
