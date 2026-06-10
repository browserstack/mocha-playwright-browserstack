const { chromium } = require('@playwright/test');
const assert = require('assert');

// Local test: open the BrowserStack Local endpoint and assert the page title.
//
// browserstackLocal: true in browserstack.yml starts the Local tunnel so the
// remote browser can reach http://bs-local.com:45454 on this machine.
describe('BrowserStack Local Test', function () {
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

  it('reaches the local server through the BrowserStack Local tunnel', async function () {
    await page.goto('http://bs-local.com:45454');

    const title = await page.title();

    assert.strictEqual(title, 'BrowserStack Local');
  });
});
