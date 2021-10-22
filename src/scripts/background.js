import browser from "webextension-polyfill";

import { block, unblock } from "./comp/block";
import { degrade, undegrade } from "./comp/degrade";
import { awsDetect, awsUndetect } from "./comp/aws-detect";
import { getParams } from "./data/params";

import Logger from "./managers/Logger";
import RequestManager from "./managers/RequestManager";

RequestManager.init();

let blockType = "";

function start(details) {
  update();
  browser.storage.onChanged.addListener(update);
}

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
  // if (temporary) return; // skip during development
  switch (reason) {
    case "install":
      browser.storage.local.set({
        blockType: "blockAll",
        awsDetect: {
          active: false,
          value: "AWS",
        },
        google: false,
        amazon: false,
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
