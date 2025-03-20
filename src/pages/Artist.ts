import Page from "../core/template/Page";

class ArtistPage extends Page {
  constructor() {
    super();
    this.node.innerHTML = "<h1>Artist page</h1>";
  }
}

export default ArtistPage;
