import Page from "../core/template/Page";
import ErrorPage from "../pages/Error";
import { routes } from "./routes";
import { Router } from "./types/types";

class AppRouter {
  private static instance: AppRouter;
  public currentPage: HTMLElement | null = null;
  private routeChangeListeners: Function[] = [];

  private constructor(private routes: Router, private errorPage: Page) {
    this.initRouter();
  }

  public static getInstance(): AppRouter {
    if (!AppRouter.instance) {
      AppRouter.instance = new AppRouter(routes, new ErrorPage());
    }
    return AppRouter.instance;
  }

  initRouter = () => {
    document.addEventListener("DOMContentLoaded", () => {
      window.addEventListener("popstate", this.router);
    });
    this.router();
  };

  navigateTo = (url: string) => {
    window.history.pushState(null, "", url);
    this.router();
  };

  router = () => {
    const urlPath = window.location.pathname;

    const route = this.routes[urlPath];

    if (route) {
      this.currentPage = route.page.node;
    } else {
      this.currentPage = this.errorPage.node;
    }

    this.routeChangeListeners.forEach((listener) => listener());
  };

  addListerToRouter = (callback: Function) => {
    this.routeChangeListeners.push(callback);
  };
}

export default AppRouter;
