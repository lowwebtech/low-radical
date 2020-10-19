import { getBrowser, getPage } from "../../../test/Puppet";
import { goToPopupPage } from "../../../test/utils";

let page, browser;
describe("--------- Popup.html", () => {
  if (process.env.EXTENSION_INSTALLED !== "true") {
    it("empty test", async () => {
      expect("").toEqual("");
    });
  } else {
    beforeAll(async () => {
      browser = await getBrowser();
      page = await getPage(browser);

      await goToPopupPage(page);
    });

    afterAll(async () => {
      await browser.close();
    });

    describe("--- functional", () => {
      it("has white background color by default", async () => {
        const bodyColor = await page.$eval(
          "body",
          (body) => body.style.backgroundColor
        );
        expect(bodyColor).toEqual("");
      });
    });
  }
});
