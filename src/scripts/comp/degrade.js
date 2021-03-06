import browser from "webextension-polyfill";
import { formatDotcoms, amazon } from "../data/amazon-urls";
import { getDegradedCSS } from "../data/css_rules";

let isDegrading = false;

export function degrade() {
  if (!isDegrading) {
    isDegrading = true;

    // block unnecessary assets
    browser.webRequest.onBeforeRequest.addListener(
      blockAssets,
      {
        urls: formatDotcoms(amazon),
        types: ["font", "media", "object", "sub_frame"],
      },
      ["blocking"]
    );

    // insert grayscale css
    browser.tabs.onUpdated.addListener(onTabUpdate);
  }
}

export function undegrade() {
  if (isDegrading) {
    isDegrading = false;
    browser.webRequest.onBeforeRequest.removeListener(blockAssets);
    browser.tabs.onUpdated.removeListener(onTabUpdate);
  }
}

function onTabUpdate(tabId, changeInfo, tab) {
  if (changeInfo.status === "loading") {
    var re = new RegExp("^(http|https)://", "i");
    var match = re.test(tab.url);
    if (match) {
      for (let i = 0, lg = amazon.length; i < lg; i++) {
        if (tab.url.indexOf(amazon[i]) !== -1) {
          const hiddenCSSRules = getDegradedCSS(amazon[i]);
          const code = `
              * { transition: none !important; animation: none !important; }
              body { filter: grayscale(1); }
              ${hiddenCSSRules}
              `;

          browser.tabs.insertCSS(tabId, {
            code: code,
          });

          break;
        }
      }
    }
  }
}

function blockAssets(requestDetails) {
  return {
    cancel: true,
  };
}
