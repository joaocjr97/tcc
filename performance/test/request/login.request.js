import http from "k6/http";
import { check } from "k6";
import Utils from "../utils/utils";

export default class Login {
  constructor() {
    this.token = null;
  }

  access(user, password) {
    let response = http.post(`${Utils.getBaseUrl()}/login`, {
      username: user,
      password: password,
    });

    let success = check(response, {
      "Status code must be 201": (r) => r.status === 201,
    });

    if (success) {
      this.token = response.json("accessToken");
      console.log(`Captured token: ${this.token}`);
    }
  }

  getToken() {
    return this.token;
  }
}