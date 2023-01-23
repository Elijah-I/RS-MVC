import headerModel from "model/header.model";
import { state } from "store/state";
import counterView from "./counter.view";
import headerVew from "./header.vew";
import helloView from "./hello.view";

type Layout = {
  main: HTMLElement;
  header: HTMLElement;
};

class AppView {
  layout = {} as Layout;

  init() {
    this.createLayout();
    this.render();
    this.subscribe();
  }

  subscribe() {
    headerModel.on("update.route", () => {
      switch (state.path) {
        case "hello":
          helloView.render(this.layout.main);
          break;

        case "counter":
          counterView.init(this.layout.main);
          break;

        default:
          console.log("404");
      }
    });
  }

  render() {
    headerVew.render(this.layout.header);
    helloView.render(this.layout.main);
  }

  createLayout() {
    this.layout.header = document.createElement("header");
    this.layout.main = document.createElement("main");

    const root = document.querySelector("#root");

    if (root) root.replaceChildren(this.layout.header, this.layout.main);
  }
}

export default new AppView();
