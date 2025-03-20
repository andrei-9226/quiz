import App from "./core/App";
import AppRouter from "./routes/AppRouter";
import "./styles/style.scss";

const app = document.querySelector("#app");

const router = AppRouter.getInstance();

app && new App(app as HTMLElement, router).render();
