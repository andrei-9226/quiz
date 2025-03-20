import App from "./core/App";
import ErrorPage from "./pages/Error";
import AppRouter from "./routes/AppRouter";
import { routes } from "./routes/routes";
import "./styles/style.scss";

const app = document.querySelector("#app");

export const router = new AppRouter(routes, new ErrorPage());

app && new App(app as HTMLElement, router).render();
