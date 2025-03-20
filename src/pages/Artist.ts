import Page from "../core/template/Page";

class ArtistPage extends Page {
  constructor() {
    super();
    this.node.innerHTML = "<h1>Artist page</h1>";
  }

  onMountComponent() {
    console.log("mount Artist page");
  }

  onUnmountComponent() {
    console.log("remove Artist page");
  }
}

export default ArtistPage;
