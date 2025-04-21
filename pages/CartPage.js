const { expect } = require('@playwright/test');
exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.cartLink = page.locator('.cartcontents');
    this.cartItem = page.locator('.cart_item:has-text("Thinking in HTML")');
    this.checkoutBtn = page.locator('a.checkout-button');
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async assertCartDetails() {
    await expect(this.cartItem).toBeVisible();
  }

  async proceedToCheckout() {
    await this.checkoutBtn.click();
  }
};