import headerModel from "model/header.model";

class HeaderController {
  route(path: string) {
    headerModel.route(path);
  }
}

export default new HeaderController();
