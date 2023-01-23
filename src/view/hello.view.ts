class HeaderView {
  render(root: HTMLElement) {
    const hello = document.createElement("div");
    hello.textContent = "hello";

    root.replaceChildren(hello);
  }
}

export default new HeaderView();
