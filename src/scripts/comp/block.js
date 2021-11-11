import browser from "webextension-polyfill";
import { formatDotcoms, parseURL, getDotComs } from "../data/urls";

let isBlocking = false;
export function block() {
  if (!isBlocking) {
    isBlocking = true;

    getDotComs().then(
      (dotcoms) => {
        console.log('DOTCOMS', dotcoms)

        browser.webRequest.onBeforeRequest.addListener(
          blockDotComs,
          {
            urls: formatDotcoms(dotcoms),
            types: ["main_frame", "sub_frame"],
          },
          ["blocking"]
        );
      },
      (e) => {
        console.log("error", e);
      }
    );
  }
}

export function unblock() {
  if (isBlocking) {
    isBlocking = false;
    browser.webRequest.onBeforeRequest.removeListener(blockDotComs);
  }
}

function blockDotComs(requestDetails) {
  const { type, url } = requestDetails;
  // // const hostname = parseURL(url).hostnam
  console.log('block', url)
  // console.log(requestDetails);

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
