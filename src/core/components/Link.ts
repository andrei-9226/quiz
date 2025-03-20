import { router } from "../../main";
import Component from "../template/Component";

class Link extends Component<HTMLAnchorElement> {
  constructor(text: string, href: string) {
    super(null, "a", "", text);
    this.node.href = href;
    this.node.onclick = this.onClickHandler;
  }

  onClickHandler = (event: MouseEvent) => {
    event.preventDefault();
    router.navigateTo(this.node.href);
  };
}

export default Link;
