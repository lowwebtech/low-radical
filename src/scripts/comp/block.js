import browser from 'webextension-polyfill'
import { formatDotcoms, getDotComs } from '../data/urls'

export function updateBlockingRules() {
  getDotComs().then((dotcoms) => {
    // console.log(dotcoms)

    if (browser.declarativeNetRequest) {

      // V3

      browser.declarativeNetRequest.getDynamicRules().then((rules) => {
        const oldRuleIds = rules.map((rule, i) => i + 1)
        const newRules = dotcoms.map((dotcom, i) => {
          return {
            id: i + 1,
            priority: 1,
            action: {
              type: 'block',
            },
            condition: {
              urlFilter: dotcom,
              resourceTypes: ['main_frame'],
            },
          }
        })

        browser.declarativeNetRequest.updateDynamicRules({
          removeRuleIds: oldRuleIds,
          addRules: newRules,
        })
      })
    }else{

      // V2
      browser.webRequest.onBeforeRequest.removeListener(blockDotComs);
      browser.webRequest.onBeforeRequest.addListener(
        blockDotComs,
        {
          urls: formatDotcoms(dotcoms),
          types: ["main_frame", "sub_frame"],
        },
        ["blocking"]
      );
    }
  })
}

function blockDotComs(requestDetails) {
  const { type, url } = requestDetails;

  const r = {};
  if (type === "main_frame") {
    r.redirectUrl = browser.runtime.getURL(
      "assets/fallback.html?from=" + encodeURIComponent(url)
    );
  } else {
    r.cancel = true;
  }

  return r;
}
