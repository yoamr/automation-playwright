const { expect } = require('@playwright/test');
exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.shopLink = page.locator('#menu-item-40');
  }
  async goToShop() {
    await this.page.goto('https://practice.automationtesting.in/');
    await this.page.waitForLoadState('domcontentloaded');
    await this.shopLink.waitFor({ state: 'visible' });
    await this.shopLink.click();
  }
};