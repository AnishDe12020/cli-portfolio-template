import React, { FC } from "react";
import Field from "./Field";
import dataObj from "./data.json";
import { Box } from "ink";

const App: FC = () => {
  return (
    <>
      <Box borderStyle="round" borderColor="green" flexDirection="column">
        {Object.entries(dataObj).map(([key, value]) => (
          <Field key={key} fieldKey={key}>
            {value}
          </Field>
        ))}
      </Box>
    </>
  );
};

module.exports = App;
export default App;
