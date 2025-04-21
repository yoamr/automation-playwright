const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { BookPage } = require('../pages/BookPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test.describe('Book Purchase Flow - Thinking in HTML', () => {
  let homePage, bookPage, cartPage, checkoutPage;

  test('Complete Book Purchase Flow', async ({ page }) => {
    const homePage = new HomePage(page);
    const bookPage = new BookPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await test.step('Step 1: Assert Thinking in HTML book exists with price', async () => {
      await homePage.goToShop();
      await bookPage.assertBookAndPrice();
    });

    await test.step('Step 2: Click Add to Basket for Thinking in HTML', async () => {
      await bookPage.addToCart();
    });

    await test.step('Step 3: Click on Shopping Cart', async () => {
      await cartPage.goToCart();
      await expect(cartPage.page).toHaveURL(/.*basket/);
    });

    await test.step('Step 4: Assert item added to cart with details', async () => {
      await cartPage.assertCartDetails();
    });

    await test.step('Step 5: Click Proceed to Checkout', async () => {
      await cartPage.proceedToCheckout();
      await expect(cartPage.page).toHaveURL(/.*checkout/);
    });

    await test.step('Step 6: Assert Billing Details form is displayed', async () => {
      await checkoutPage.assertBillingForm();
    });
  })
});
