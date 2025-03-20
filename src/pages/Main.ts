import Page from "../core/template/Page";

class MainPage extends Page {
  constructor() {
    super();
    this.node.innerHTML = "<h1>Main page</h1>";
  }
}

export default MainPage;
