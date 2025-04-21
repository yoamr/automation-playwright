const { expect } = require('@playwright/test');

exports.BookPage = class BookPage {
  constructor(page) {
    this.page = page;
    this.book = page.locator('h3:has-text("Thinking in HTML")');
    this.price = page.locator('li.post-163 .amount:has-text("400")');
    this.addToBasket = page.locator('li.post-163 .add_to_cart_button ');
    this.viewCartLink = page.locator("li.post-163 .added_to_cart");
  }

  async assertBookAndPrice() {
    await expect(this.book).toBeVisible();
    await expect(this.price).toBeVisible();
  }

  async addToCart() {
    await this.page.waitForSelector('li.post-163 .add_to_cart_button', { state: 'visible', timeout: 5000 });
    await this.addToBasket.click();

  }
  async assertBookAdded() {
    await expect(this.viewCartLink).toBeVisible()
  }
};