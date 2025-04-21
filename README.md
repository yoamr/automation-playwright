Automation Practice - Playwright Test Framework

This project automates the purchase flow of the "Thinking in HTML" book on Automation Practice (https://practice.automationtesting.in/) using Playwright with JavaScript.

--------------------------------------------------------------------------------
Features:
--------------------------------------------------------------------------------
- Verifies the presence and price of the "Thinking in HTML" book
- Adds book to basket and checks cart details
- Proceeds to checkout and confirms billing form is visible
- Uses Page Object Model for clean structure
- Supports parallel execution on Chrome and Firefox
- Generates HTML test reports
- Optional: Docker support (bonus)

--------------------------------------------------------------------------------
Project Structure:
--------------------------------------------------------------------------------

automation-playwright/
├── node_module
|
├── pages/                    - Page Object files
│   ├── HomePage.js
│   ├── BookPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
|
├── tests/                    - Test Specs
│   └── bookPurchase.spec.js
|
├── test-report
├── test-results
├── package-lock.json
├── package.json
├── playwright.config.js      - Playwright config
├── README.txt

--------------------------------------------------------------------------------
Setup Instructions:
--------------------------------------------------------------------------------

1. Clone the Repository:

git clone https://github.com/your-username/automation-playwright.git
cd automation-playwright

2. Install Dependencies:

npm install

3. Install Playwright Browsers:

npx playwright install

--------------------------------------------------------------------------------
How to Execute Tests:
--------------------------------------------------------------------------------

- Run All Tests (Default: Chromium):
  npx playwright test

- Run in Firefox or WebKit:
  npx playwright test --project=firefox
  npx playwright test --project=webkit

- Run Tests in Parallel:
  npx playwright test --workers=4

- Run Tests in UI (headed mode):
  npx playwright test --ui

- View HTML Report:
  npx playwright show-report

--------------------------------------------------------------------------------
