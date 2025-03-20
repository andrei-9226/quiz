import AppRouter from "../routes/Router";
import Header from "./components/Header";

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
    page && this.root.append(page);
  };

  render = () => {
    this.rootRender();
  };
}

export default App;
