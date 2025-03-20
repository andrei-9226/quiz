import Component from "../template/Component";
import Link from "./Link";

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

class Header extends Component<HTMLElement> {
  constructor() {
    super(null, "header");

    const listLinks = links.map(({ text, href }) => new Link(text, href).node);
    
    listLinks.forEach((link) => {
      this.node.appendChild<HTMLAnchorElement>(link);
    });
  }
}

export default Header;
