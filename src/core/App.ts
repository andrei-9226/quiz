import AppRouter from "../routes/AppRouter";
import Navigation from "./components/Navigation";

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
    document.body.prepend(new Navigation().node);
  };

  rootRender = () => {
    const page = this.router.currentPage;
    this.root.innerHTML = ``;
    page && this.root.append(page);
  };

  render = () => {
    this.rootRender();
  };
}

export default App;
