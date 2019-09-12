//import React from "preact/compat";
//import ReactDOM from "preact/compat";

import { h, render } from "preact";
//import React from "react";
//import ReactDOM from "react-dom";

import {Main} from "./app/main";

const appMount = document.querySelector("#preact-wc-test-container");
//if (appMount) ReactDOM.render(<Main />, appMount);
if (appMount) render(<Main status='bar' />, appMount);

export default Main;
