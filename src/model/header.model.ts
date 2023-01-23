import { state } from "store/state";
import { Observer } from "utils/observer";

class HeaderModel extends Observer {
  route(path: string) {
    state.path = path;
    this.emit("update.route");
  }
}

const a = new HeaderModel();

export default a;
