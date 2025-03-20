import Page from "../core/template/Page";

class SettingsPage extends Page {
    constructor() {
      super();
      this.node.innerHTML = "<h1>Settings page</h1>";
    }
  }
  
  export default SettingsPage;