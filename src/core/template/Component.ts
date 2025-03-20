class Component<TypeNodeElement extends HTMLElement> {
  public node: TypeNodeElement;

  constructor(
    parentNode: Element | null = null,
    tagName: string = "div",
    className = "",
    content = ""
  ) {
    this.node = document.createElement(tagName) as TypeNodeElement;
    this.node.className = className;
    this.node.innerText = content;
    if (parentNode) {
      parentNode.appendChild(this.node);
    }
  }

  destroy() {
    this.node.remove();
  }
}

export default Component;
