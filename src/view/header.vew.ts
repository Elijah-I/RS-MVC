import headerController from "controller/header.controller";

class HeaderView {
  render(root: HTMLElement) {
    const hello = document.createElement("button");
    hello.textContent = "hello";
    hello.addEventListener("click", () => {
      headerController.route("hello");
    });

    const counter = document.createElement("button");
    counter.textContent = "counter";
    counter.addEventListener("click", () => {
      headerController.route("counter");
    });

    root.replaceChildren(hello, counter);
  }
}

export default new HeaderView();
