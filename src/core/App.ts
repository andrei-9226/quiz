import AppRouter from "../routes/Router";
import { ErrorPage, routes } from "../routes/routes";

class App {
  private root: HTMLElement;

  constructor(root: HTMLElement) {
    this.root = root;
    this.initApp();
  }

  initApp() {
    new AppRouter(this.root, routes, ErrorPage);
    // router.addListener()
  }

  //   render() {
  //     this.root.append(this.currentPage);
  //   }
}

export default App;
