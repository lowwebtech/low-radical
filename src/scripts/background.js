import browser from 'webextension-polyfill';

import { block, unblock } from './comp/block';
import { degrade, undegrade } from './comp/degrade';
import aws_detect from './comp/aws_detect';

import Logger from './comp/Logger';
import RequestManager from './comp/RequestManager';

let blockType = '';

function start(details) {
  setTimeout(() => {
    Logger.init();
    RequestManager.init();

    let gettingItem = browser.storage.local.get('blockType');
    gettingItem.then(onGot, onError);

    browser.storage.onChanged.addListener(onChanged)

    function onChanged(result){
      if(result.blockType){
        update(result.blockType.newValue)
      }
    }

    function onGot(result){
      const type = result.blockType || 'blockAll';
      update( type )
    }

    function onError(e){
      console.log('error', e);
    }

  },300);
}

function update(type){
  if(blockType !== type){

    if(blockType === 'blockAll') unblock()
    else if(blockType === 'degradeAll') undegrade()

    blockType = type

    if(blockType === 'blockAll') block()
    else if(blockType === 'degradeAll') degrade()

  }
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