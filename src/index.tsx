import { h, render } from "preact";
import { Main } from "./app/main";

const appMount = document.querySelector("#preact-wc-test-container");
if (appMount) {

  const appRender = () => render(<Main status='bar' />, appMount);
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./app/main', appRender);
  }
  appRender();
}



export default Main;
