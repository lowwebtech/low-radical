import browser from 'webextension-polyfill';
import Logger from '../managers/Logger'

let isDetectingAWS = false

function logResponse(details) {
  Logger.logRequest(details);
}

export function aws_detect( badgeText ){
  if(!isDetectingAWS){
    isDetectingAWS = true

    Logger.enable()
    browser.webRequest.onHeadersReceived.addListener(
      logResponse,
      { urls:['<all_urls>'] },
      ["responseHeaders"]
    );
  }
}

export function aws_undetect(){
  if(isDetectingAWS){
    isDetectingAWS = false

    Logger.disable()
    browser.webRequest.onHeadersReceived.removeListener(logResponse);
  }
}