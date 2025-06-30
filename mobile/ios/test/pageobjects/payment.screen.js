import { $ } from "@wdio/globals";

class PaymentScreen {
  get checkoutBtn() {
    return $("id:completeCheckout");
  }

  async goToCheckout() {
    await this.checkoutBtn.waitForDisplayed({ timeout: 7000 });
    this.checkoutBtn.click();
  }
}

export default new PaymentScreen();