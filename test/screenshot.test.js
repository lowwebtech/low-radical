import { screenshot } from './screenShoter';
import { getBrowser, getPage } from './Puppet';
import { goToOptionPage, goToPopupPage, goToWeb } from './utils';

const urls = {
  amazon: "https://amazon.com",
};

let page, browser;
describe('--------- SCREENSHOTS', () => {
  if (process.env.EXTENSION_INSTALLED !== 'true') {
    it('empty test', async () => {
      expect('').toEqual('');
    });
  } else {
    beforeAll(async () => {
      browser = await getBrowser();
      page = await getPage(browser);

      screenshot.setPage(page);
    });

    afterAll(async () => {
      await browser.close();
    });

    describe('------ ', () => {
      for (const [key, value] of Object.entries(urls)) {
        it(key, async () => {
          await goToWeb(value, page);
          return screenshot.takeAndCompare(page, key);
        });
      }

      // it('popup.html', async () => {
      //   await goToPopupPage(page);
      //   return screenshot.takeAndCompare(page, 'popup');
      // });
      // it('options.html', async () => {
      //   await goToOptionPage(page);
      //   return screenshot.takeAndCompare(page, 'option');
      // });
    
    });
  }
});
