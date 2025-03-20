import AppRouter from "../routes/AppRouter";
import Header from "./components/Header";
import { mountEvent } from "./events/LifeCycle";

class App {
  private root: HTMLElement;
  private router: AppRouter;

  constructor(root: HTMLElement, router: AppRouter) {
    this.root = root;
    this.router = router;
    this.initApp();
  }

  initApp() {
    this.router.addListerToRouter(this.render);
    this.headerRender();
  }

  headerRender = () => {
    document.body.prepend(new Header().node);
  };

  rootRender = () => {
    const page = this.router.currentPage;
    this.root.innerHTML = ``;

    // page?.dispatchEvent(mountEvent);
    page && this.root.append(page);
  };

  render = () => {
    this.rootRender();
  };
}

export default App;
