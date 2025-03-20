import AppRouter from "../../routes/AppRouter";
import Component from "../template/Component";

class Anchor extends Component<HTMLAnchorElement> {
  private router: AppRouter = AppRouter.getInstance();
  constructor(text: string, href: string) {
    super(null, "a", "", text);
    this.node.href = href;
    this.node.onclick = this.onClickHandler;
  }

  onClickHandler = (event: MouseEvent) => {
    event.preventDefault();

    this.router.navigateTo(this.node.href);
  };
}

export default Anchor;
