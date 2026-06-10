const { chromium } = require('@playwright/test');
const assert = require('assert');

// Sample test: open bstackdemo.com, add the first product to the cart and
// assert the product name shown in the cart matches the product on the shelf.
//
// This uses Playwright as a library. The BrowserStack Node SDK patches
// playwright.chromium.connect() at import time, so the test runs on the
// BrowserStack cloud without any BrowserStack-specific code here.
describe('BrowserStack Sample Test', function () {
  this.timeout(60000);

  let browser;
  let page;

  before(async function () {
    browser = await chromium.connect({
      wsEndpoint: 'wss://cdp.browserstack.com/playwright'
    });
    page = await browser.newPage();
  });

  after(async function () {
    if (page) await page.close();
    if (browser) await browser.close();
  });

  it('adds the first product to the cart', async function () {
    await page.goto('https://bstackdemo.com/');

    const productText = await page.locator('//*[@id="1"]/p').textContent();

    await page.locator('//*[@id="1"]/div[4]').click();

    await page.locator('.float-cart__content').waitFor();

    const productCartText = await page
      .locator('//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]')
      .textContent();

    assert.strictEqual(productCartText, productText);
  });
});
