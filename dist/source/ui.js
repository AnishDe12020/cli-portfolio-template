"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
// import Field from "./Field";
const data_json_1 = __importDefault(require("../data.json"));
const App = () => {
  return (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(ink_1.Text, null, "Text"),
    Object.keys(data_json_1.default).map((key) => (react_1.default.createElement(ink_1.Text, null, key)))));
};
module.exports = App;
exports.default = App;
