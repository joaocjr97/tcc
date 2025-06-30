import { $ } from "@wdio/globals";

class SearchScreen {
  get ingridRunningJacket() {
    return $("id:Ingrid Running Jacket R$ 84 R$ 100");
  }

  get addToCart() {
    return $("id:addToCart");
  }

  async selectProductAndAddToCart() {
    await this.ingridRunningJacket.click();
    await this.addToCart.click();
  }
}

export default new SearchScreen();