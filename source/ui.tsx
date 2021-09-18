import React, { FC } from "react";
import Field from "./Field";
import dataObj from "./data.json";

const App: FC = () => {
	return (
		<>
			{Object.entries(dataObj).map(([key, value]) => (
				<Field key={key} fieldKey={key}>
					{value}
				</Field>
				// <>
				// 	<Text>{key}</Text>
				// 	<Text>{value}</Text>
				// </>
			))}
		</>
	);
};

module.exports = App;
export default App;
