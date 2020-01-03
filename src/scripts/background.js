import browser from 'webextension-polyfill';
import dotcom from './comp/dotcom';
import corp_dotcom from './comp/corp_dotcom';
import aws_detect from './comp/aws_detect';

import Logger from './comp/Logger';
import RequestManager from './comp/RequestManager';

function start(details) {
  setTimeout(() => {
    Logger.init();
    RequestManager.init();
  },300);
}
browser.runtime.onInstalled.addListener(() => {
  start()
});

// browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     // Do something with the message!
//     alert(request.url);

//     // And respond back to the sender.
//     return Promise.resolve('got your message, thanks!');
// });