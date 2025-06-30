import homeScreen from "../screenobjects/home.screen";
import loginScreen from "../screenobjects/login.screen";
import searchScreen from "../screenobjects/search.screen";
import mycartScreen from "../screenobjects/mycart.screen";
import paymentScreen from "../screenobjects/payment.screen";
import checkoutScreen from "../screenobjects/checkout.screen";

describe("Checkout Flow", () => {
  it("Should finish the shopping process with sucess", async () => {
    await homeScreen.openMenu("Account");
    await loginScreen.login(process.env.EMAIL, process.env.PASSWORD);
    await homeScreen.openSearch();
    await searchScreen.selectProductAndAddToCart();
    await mycartScreen.goToPayment();
    await paymentScreen.goToCheckout();
    await checkoutScreen.orderSucess();
  });
});