import browser from 'webextension-polyfill';
import { formatDotcoms, corp_dotcoms, assets_dotcoms } from '../data/amazon_urls';

function blockAssets(requestDetails) {
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

// block unnecessary assets
const assetsUrls = corp_dotcoms.concat(assets_dotcoms);
browser.webRequest.onBeforeRequest.addListener(
  blockAssets,
  {
    urls: formatDotcoms(assetsUrls), 
    types:['font', 'media', 'object', 'sub_frame']
  },
  ['blocking']
);

// insert grayscale css
chrome.tabs.onUpdated.addListener(
  function(tabId, changeInfo, tab){
    if( changeInfo.status == 'loading' ){
      var re = new RegExp("^(http|https)://", "i");
      var match = re.test(tab.url);
      if (match) {
        for (let i = 0, lg = corp_dotcoms.length; i<lg; i++) {
          if (tab.url.indexOf(corp_dotcoms[i]) !== -1) {
            chrome.tabs.insertCSS(tabId, {
              code: `
                * { transition: none !important; }
                body { filter: grayscale(1); }
                `
            });
          }
        } 
      }
    }
  }
);
