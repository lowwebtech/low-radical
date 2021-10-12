import browser from "webextension-polyfill";

import { formatDotcoms, getDotComs } from "../data/urls";
import { getDegradedCSS } from "../data/css_rules";

let isDegrading = false;
let all = [];

export function degrade() {
  if (!isDegrading) {
    isDegrading = true;

    getDotComs().then(
      (dotcoms) => {
        all = dotcoms;

        // block unnecessary assets
        browser.webRequest.onBeforeRequest.addListener(
          blockAssets,
          {
            urls: formatDotcoms(dotcoms),
            types: ["font", "media", "object", "sub_frame"],
          },
          ["blocking"]
        );

        // insert grayscale css
        browser.tabs.onUpdated.addListener(onTabUpdate);
      },
      (e) => {
        console.log("error", e);
      }
    );
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
      for (let i = 0, lg = all.length; i < lg; i++) {
        if (tab.url.indexOf(all[i]) !== -1) {
          const hiddenCSSRules = getDegradedCSS(all[i]);
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
