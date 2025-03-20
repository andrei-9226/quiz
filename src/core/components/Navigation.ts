import Component from "../template/Component";
import Anchor from "./Link";

const links = [
  {
    href: "/",
    text: "Main",
  },
  {
    href: "/artists",
    text: "Artists",
  },
  {
    href: "/pictures",
    text: "Pictures",
  },
  {
    href: "/settings",
    text: "Setting",
  },
];

class Navigation extends Component<HTMLHeadElement> {
  constructor() {
    super(null, "header", "navigation");

    const listLinks = links.map(
      ({ text, href }) => new Anchor(text, href).node
    );

    listLinks.forEach((link) => {
      this.node.appendChild<HTMLAnchorElement>(link);
    });
  }
}

export default Navigation;
