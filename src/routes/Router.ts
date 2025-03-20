import { Router } from "./types/types";

class AppRouter {
  public currentPage: HTMLElement | null = null;
  private routeChangeListeners: Function[] = [];

  constructor(private routes: Router, private errorPage: HTMLElement) {
    this.initRouter();
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
      this.currentPage = route.page;
    } else {
      this.currentPage = this.errorPage;
    }

    this.routeChangeListeners.forEach((listener) => listener());
  };

  addListerToRouter = (callback: Function) => {
    this.routeChangeListeners.push(callback);
  };
}

export default AppRouter;
