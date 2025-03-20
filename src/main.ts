import App from "./core/App";
import AppRouter from "./routes/Router";
import { ErrorPage, routes } from "./routes/routes";
import "./styles/style.scss";

const app = document.querySelector("#app");

export const router = new AppRouter(routes, ErrorPage);

app && new App(app as HTMLElement, router).render();
