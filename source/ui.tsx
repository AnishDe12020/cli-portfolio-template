import React, { FC } from "react";
import Field from "./Field";
import dataObj from "./data.json";
import { Box } from "ink";

const App: FC = () => {
	return (
		<>
			{Object.entries(dataObj).map(([key, value]) => (
				<Box margin={0.25}>
					<Field key={key} fieldKey={key}>
						{value}
					</Field>
				</Box>
			))}
		</>
	);
};

module.exports = App;
export default App;
