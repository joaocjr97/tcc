import { $ } from "@wdio/globals";

class MyCartScreen {
  get continueToPayment() {
    return $("id:selectAddressOrContinueToPayment");
  }

  async goToPayment() {
    this.continueToPayment.click();
  }
}

export default new MyCartScreen();