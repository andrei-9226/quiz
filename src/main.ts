import App from "./core/App";
import "./styles/style.scss";

const app = document.querySelector('#app')

app && new App(app as HTMLElement)
