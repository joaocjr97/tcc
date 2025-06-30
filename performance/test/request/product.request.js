import http from "k6/http";
import Utils from '../utils/utils.js'
import { check } from "k6";

export default class Product {

  list(token) {
    let response = http.get(`${Utils.getBaseUrl()}/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });

    check(response, {
      "Status must be 200": (r) => r.status === 200,
    });
  }
  
}