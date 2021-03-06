import browser from "webextension-polyfill";

import { block, unblock } from "./comp/block";
import { degrade, undegrade } from "./comp/degrade";
import { awsDetect, awsUndetect } from "./comp/aws-detect";

import Logger from "./managers/Logger";
import RequestManager from "./managers/RequestManager";

// Logger.init();
RequestManager.init();

let blockType = "";

function start(details) {
  setTimeout(() => {
    const gettingItem = browser.storage.local.get(["blockType", "awsDetect"]);
    gettingItem.then(onGot, onError);

    browser.storage.onChanged.addListener(onChanged);

    function onChanged(result) {
      if (result.blockType) {
        updateBlockingType(result.blockType.newValue);
      }
      if (result.awsDetect) {
        updateAWSdetect(result.awsDetect.newValue);
      }
    }

    function onGot(result) {
      const type = result.blockType;
      const awsDetect = result.awsDetect;

      updateBlockingType(type);
      updateAWSdetect(awsDetect);
    }

    function onError(e) {
      console.log("error", e);
    }
  }, 300);
}

function updateAWSdetect(aws) {
  if (aws && aws.value) {
    Logger.setBadgeText(aws.value);
  }

  if (aws && aws.active) awsDetect(aws.value);
  else awsUndetect();
}

function updateBlockingType(type) {
  if (blockType !== type) {
    if (blockType === "blockAll") unblock();
    else if (blockType === "degradeAll") undegrade();

    blockType = type;

    if (blockType === "blockAll") block();
    else if (blockType === "degradeAll") degrade();
  }
}

browser.runtime.onStartup.addListener((details) => {
  start();
});

browser.runtime.onInstalled.addListener(() => {
  // default params
  browser.storage.local.set({
    blockType: "blockAll",
    awsDetect: {
      active: true,
      value: "AWS",
    },
    // replaceBy: {
    //   active: false,
    //   value: 'Jeff fucking Bezos'
    // },
  });
  start();
});

browser.runtime.onInstalled.addListener(async ({ reason, temporary }) => {
  console.log("Promise onInstalled", reason, temporary);
  if (temporary) return; // skip during development
  switch (reason) {
    case "install":
      // {
      // const url = browser.runtime.getURL('views/installed.html');
      // await browser.tabs.create({ url });
      await browser.runtime.openOptionsPage();
      // or: await browser.windows.create({ url, type: 'popup', height: 600, width: 600, });
      // }
      break;
  }
});
