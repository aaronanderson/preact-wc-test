import { h, render } from "preact";
import {Main} from "./app/main";

const appMount = document.querySelector("#preact-wc-test-container");
if (appMount) render(<Main status='bar' />, appMount);

export default Main;
