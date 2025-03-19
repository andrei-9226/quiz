import { Router } from "./types/types";

class AppRouter {
  constructor(
    private rootApp: HTMLElement,
    private routes: Router,
    private errorPage: HTMLElement
  ) {
    this.initRouter();
  }

  initRouter = () => {
    document.addEventListener("DOMContentLoaded", () => {
      window.addEventListener("popstate", this.router);
    });
    this.addListenerForAnchors();
    this.router();
  };

  addListenerForAnchors = () => {
    document.querySelectorAll("a").forEach((anchor) => {
      anchor.addEventListener("click", (event) => {
        event.preventDefault();
        const href = anchor.getAttribute("href");
        if (href) {
          this.navigateTo(href);
        }
      });
    });
  };

  navigateTo = (url: string) => {
    window.history.pushState(null, "", url);
    this.router();
  };

  router = () => {
    const urlPath = window.location.pathname;

    const route = this.routes[urlPath];
    let page = null;
    if (route) {
      page = route.page();
    } else {
      page = this.errorPage;
    }
    this.rootApp.innerHTML = "";

    this.rootApp.append(page);
  };
}

export default AppRouter;
