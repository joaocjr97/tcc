import { $, expect } from "@wdio/globals";

class CheckoutScreen {
  get goBackHomeBtn() {
    return $("id:goBackHome");
  }

  async orderSucess() {
    const text = await this.goBackHomeBtn.getText();
    expect(text).toBe("Go Back Home");
  }
}

export default new CheckoutScreen();