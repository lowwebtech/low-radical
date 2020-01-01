import browser from 'webextension-polyfill';
import { formatDotcoms, dotcoms, corp_dotcoms, assets_dotcoms } from './amazon_urls';

browser.runtime.onInstalled.addListener(() => {
    // eslint-disable-next-line no-console
    console.log('onInstalled....');
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // Do something with the message!
    alert(request.url);

    // And respond back to the sender.
    return Promise.resolve('got your message, thanks!');
});


function requestDotComs(requestDetails) {
  // console.log(requestDetails);
  const { type, url } = requestDetails;
  let r = {};
  if (type === 'main_frame') {
    r.redirectUrl = browser.runtime.getURL('assets/fallback.html');
  }else{
    r.cancel = true;
  }
  return r;
}
function blockAssets(requestDetails) {
  console.log(requestDetails.type);
  // const { type, url } = requestDetails;
  // let r = {};
  // switch(type){
  //   case 'font':
  //   case 'media':
  //   case 'object':
  //   case 'sub_frame':
  //     r.cancel = true;
  // }
  return {
    cancel: true
  };
}

browser.webRequest.onBeforeRequest.addListener(
  requestDotComs,
  {urls: formatDotcoms(dotcoms)},
  ['blocking']
);

const fontsUrls = corp_dotcoms.concat(assets_dotcoms);
browser.webRequest.onBeforeRequest.addListener(
  blockAssets,
  {urls: formatDotcoms(fontsUrls), types:['font', 'media', 'object', 'sub_frame']},
  ['blocking']
);