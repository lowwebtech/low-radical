import browser from "webextension-polyfill";

import { block, unblock } from "./comp/block";
import { initParams, getLocalParams } from "./data/params";
import RequestManager from "./managers/RequestManager";

RequestManager.init();

function start() {
  console.log("START");
  block();

  browser.storage.onChanged.addListener(update);
}

function update() {
  unblock();
  block();
}

browser.runtime.onInstalled.addListener(async ({ reason, temporary }) => {
  // if (temporary) return; // skip during development

  switch (reason) {
    case "install":
      await browser.runtime.openOptionsPage();
      break;
  }
});

initParams().then(() => start(), console.error);

// browser.storage.local.clear()
// browser.storage.sync.clear()

getLocalParams().then((p) => {
  console.log("PARAMS", p);
}, console.error);
