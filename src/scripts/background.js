import browser from "webextension-polyfill";

import { block, unblock } from "./comp/block";
import { degrade, undegrade } from "./comp/degrade";
import { awsDetect, awsUndetect } from "./comp/aws-detect";
import { getParams } from "./data/params";

import Logger from "./managers/Logger";
import RequestManager from "./managers/RequestManager";

// Logger.init();
RequestManager.init();

let blockType = "";

function start(details) {
  update();
  // const gettingItem = browser.storage.local.get(params)
  // gettingItem.then(onGot, onError)

  browser.storage.onChanged.addListener(update);
}

// function onChanged(result) {
//   if (result.blockType) {
//     updateBlockingType(result.blockType.newValue);
//   }
//   if (result.awsDetect) {
//     updateAWSdetect(result.awsDetect.newValue);
//   }

//   console.log("ONCHANGED", result);
// }

// function onGot(result) {
//   update()
// }

function update() {
  getParams((params) => {
    const type = params.blockType;
    const awsDetect = params.awsDetect;

    updateBlockingType(type);
    updateAWSdetect(awsDetect);
  });
}

function updateAWSdetect(aws) {
  if (aws && aws.value) {
    Logger.setBadgeText(aws.value);
  }

  if (aws && aws.active) awsDetect(aws.value);
  else awsUndetect();
}

function updateBlockingType(type) {
  if (blockType === "blockAll") unblock();
  else if (blockType === "degradeAll") undegrade();

  blockType = type;

  if (blockType === "blockAll") block();
  else if (blockType === "degradeAll") degrade();
}

browser.runtime.onInstalled.addListener(async ({ reason, temporary }) => {
  if (temporary) return; // skip during development
  switch (reason) {
    case "install":
      browser.storage.local.set({
        blockType: "blockAll",
        awsDetect: {
          active: true,
          value: "AWS",
        },
        google: false,
        amazon: true,
        facebook: false,
        apple: false,
        microsoft: false,
      });

      await browser.runtime.openOptionsPage();
      break;
  }
});

setTimeout(() => {
  start();
}, 300);
