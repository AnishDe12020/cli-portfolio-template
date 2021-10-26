"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const Field = ({ key, value }) => (react_1.default.createElement(ink_1.Box, null,
  react_1.default.createElement(ink_1.Text, { color: "green" }, "me"),
  react_1.default.createElement(ink_1.Text, { color: "white" }, "."),
  react_1.default.createElement(ink_1.Text, { color: "cyan" }, key),
  react_1.default.createElement(ink_1.Text, { color: "green" }, " = "),
  react_1.default.createElement(ink_1.Text, { color: "yellow" },
    "\"",
    value,
    "\"")));
exports.default = Field;
