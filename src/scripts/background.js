import browser from 'webextension-polyfill';

import { block, unblock } from './comp/block';
import { degrade, undegrade } from './comp/degrade';
import { aws_detect, aws_undetect } from './comp/aws_detect';

import Logger from './managers/Logger';
import RequestManager from './managers/RequestManager';

// Logger.init();
RequestManager.init();

let blockType = '';

function start(details) {
  setTimeout(() => {

    let gettingItem = browser.storage.local.get(['blockType', 'awsDetect']);
    gettingItem.then(onGot, onError);

    browser.storage.onChanged.addListener(onChanged)

    function onChanged(result){
      if(result.blockType){
        updateBlockingType(result.blockType.newValue)
      }
      if(result.awsDetect){
        updateAWSdetect(result.awsDetect.newValue)
      }
    }

    function onGot(result){
      const type = result.blockType || 'blockAll';
      const awsDetect = result.awsDetect;

      updateBlockingType( type )
      updateAWSdetect( awsDetect )
    }

    function onError(e){
      console.log('error', e);
    }

  },300);
}

function updateAWSdetect(aws){
  if(aws && aws.active) aws_detect( aws.value )
  else aws_undetect()
}

function updateBlockingType(type){
  if(blockType !== type){
    if(blockType === 'blockAll') unblock()
    else if(blockType === 'degradeAll') undegrade()

    blockType = type

    if(blockType === 'blockAll') block()
    else if(blockType === 'degradeAll') degrade()
  }
}

browser.runtime.onInstalled.addListener(() => {
  // default params
  browser.storage.local.set({
    blockType: 'blockAll',
    awsDetect: {
      active: true,
      value: 'AWS'
    },
    replaceBy: {
      active: false,
      value: 'Jeff fucking Bezos'
    },
  });

  start()

  browser.runtime.openOptionsPage()
  
});
