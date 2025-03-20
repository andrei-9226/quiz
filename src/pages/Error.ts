import Page from "../core/template/Page";

class ErrorPage extends Page {
  constructor() {
    super();
    this.node.innerHTML = "<h1>Page not found</h1>";
  }
}

export default ErrorPage;
