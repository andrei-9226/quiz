import Component from "./Component";

class Page extends Component<HTMLDivElement> {
  constructor() {
    super(null, "main", "container");
    // this.node.addEventListener("unmount_page", this.onUnmountComponent);
    // this.node.addEventListener("mount_page", this.onMountComponent);
  }

  // onUnmountComponent() {}

  // onMountComponent() {}
}

export default Page;
