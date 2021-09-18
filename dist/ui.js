"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Field_1 = __importDefault(require("./Field"));
const data_json_1 = __importDefault(require("./data.json"));
const App = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null, Object.entries(data_json_1.default).map(([key, value]) => (react_1.default.createElement(Field_1.default, { key: key, fieldKey: key }, value)
    // <>
    // 	<Text>{key}</Text>
    // 	<Text>{value}</Text>
    // </>
    ))));
};
module.exports = App;
exports.default = App;
