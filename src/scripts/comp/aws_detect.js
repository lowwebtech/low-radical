import browser from 'webextension-polyfill';
import RequestManager from './RequestManager'
import Logger from './Logger'

function logResponse(details) {
  Logger.logRequest(details);
}
browser.webRequest.onHeadersReceived.addListener(
  logResponse,
  { urls:['<all_urls>'] },
  ["responseHeaders"]
);
