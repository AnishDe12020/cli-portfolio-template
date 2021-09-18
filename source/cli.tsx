#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import meow from "meow";
import App from "./ui";

const cli = meow(`
	Usage
	  $ anishde12020

	Options
		--name  Your name

	Examples
	  $ anishde12020 --name=Jane
	  Hello, Jane
`);

render(React.createElement(App, cli.flags, process.stdout));
