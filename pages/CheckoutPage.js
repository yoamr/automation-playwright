const { expect } = require('@playwright/test');
exports.CheckoutPage = class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('#billing_first_name');
  }

  async assertBillingForm() {
    await expect(this.firstName).toBeVisible();
  }
};