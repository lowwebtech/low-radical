import browser from "webextension-polyfill";
import Logger from "../managers/Logger";

let isDetectingAWS = false;

function logResponse(details) {
  Logger.logRequest(details);
}

export function awsDetect(badgeText) {
  if (!isDetectingAWS) {
    isDetectingAWS = true;

    Logger.enable();
    browser.webRequest.onHeadersReceived.addListener(
      logResponse,
      { urls: ["*://*/*"] },
      ["responseHeaders"]
    );
  }
}

export function awsUndetect() {
  if (isDetectingAWS) {
    isDetectingAWS = false;

    Logger.disable();
    browser.webRequest.onHeadersReceived.removeListener(logResponse);
  }
}
