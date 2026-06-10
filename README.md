# Mocha (Playwright) with BrowserStack

Sample project for running Mocha tests that drive Playwright (library mode) on
BrowserStack Automate using the [BrowserStack Node SDK](https://www.browserstack.com/docs/automate/playwright).

## Prerequisites

- Node.js (v14 or newer) and npm installed.
- A [BrowserStack](https://www.browserstack.com/) account with a username and access key.

## Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/browserstack/mocha-playwright-browserstack.git
   cd mocha-playwright-browserstack
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set your BrowserStack credentials as environment variables:

   ```bash
   export BROWSERSTACK_USERNAME="YOUR_USERNAME"
   export BROWSERSTACK_ACCESS_KEY="YOUR_ACCESS_KEY"
   ```

   Alternatively, edit `browserstack.yml` and replace `YOUR_USERNAME` and
   `YOUR_ACCESS_KEY` with your BrowserStack credentials.

## Run Sample Test

```bash
npx browserstack-node-sdk mocha tests/sample_test.js --timeout=60000
```

## Run Local Test

```bash
npx browserstack-node-sdk mocha tests/sample_local_test.js --timeout=60000
```

## Notes

- View your test runs on the [BrowserStack Automate dashboard](https://automate.browserstack.com/).
- The local test requires `browserstackLocal: true` in `browserstack.yml` (already
  set) so the BrowserStack Local tunnel exposes `http://bs-local.com:45454` to the
  remote browser.
