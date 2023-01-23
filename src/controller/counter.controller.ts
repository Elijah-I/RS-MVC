import counterModel from "model/counter.model";

class CounterController {
  incremet() {
    counterModel.incremet();
  }

  decrement() {
    counterModel.decrement();
  }
}

export default new CounterController();
