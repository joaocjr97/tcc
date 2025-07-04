import { $ } from "@wdio/globals";

class LoginScreen {
  get email() {
    return $("id:email");
  }

  get password() {
    return $("id:password");
  }

  get btnLogin() {
    return $("id:btnLogin");
  }

  async login(email, password) {
    await this.email.setValue(email);
    await this.password.setValue(password);
    await this.btnLogin.click();
  }
}

export default new LoginScreen();