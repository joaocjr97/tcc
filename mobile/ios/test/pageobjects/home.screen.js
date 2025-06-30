import { $ } from "@wdio/globals";

class HomeScreen {

  get search() {
    return $("id: Search Products");
  }

  async openMenu(menu) {
    await $(`id:tab-${menu}`).click();
  }

  async openSearch() {
    await this.search.click();
  }
  
}

export default new HomeScreen();