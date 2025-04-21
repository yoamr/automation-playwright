module.exports = {
  timeout: 60000,
  retries: 0,
  use: {
    headless: false,
  },
  projects: [
    { name: 'Chrome', use: { browserName: 'chromium' }},
    { name: 'Firefox', use: { browserName: 'firefox' }},
  ],
  reporter: [['html', { outputFolder: 'test-report', open: 'never' }]],
};