import { state } from "store/state";
import { Observer } from "utils/observer";

class CounterModel extends Observer {
  incremet() {
    state.counter++;
    this.emit("update.counter");
  }

  decrement() {
    state.counter--;
    this.emit("update.counter");
  }
}

export default new CounterModel();
