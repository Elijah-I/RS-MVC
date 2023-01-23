import counterController from "controller/counter.controller";
import counterModel from "model/counter.model";
import { state } from "store/state";

class CounterView {
  init(root: HTMLElement) {
    this.render(root);
    this.subscribe(root);
  }

  subscribe(root: HTMLElement) {
    counterModel.on("update.counter", () => {
      this.render(root);
    });
  }

  render(root: HTMLElement) {
    const input = document.createElement("input");
    input.value = state.counter.toString();

    const plus = document.createElement("button");
    plus.textContent = "+";
    plus.addEventListener("click", () => {
      counterController.incremet();
    });

    const minus = document.createElement("button");
    minus.textContent = "-";
    minus.addEventListener("click", () => {
      counterController.decrement();
    });

    root.replaceChildren(input, plus, minus);
  }
}

export default new CounterView();
