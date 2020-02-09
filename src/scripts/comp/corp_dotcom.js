import browser from 'webextension-polyfill';
import { formatDotcoms, corp_dotcoms, devil_corp } from '../data/amazon_urls';

function blockAssets(requestDetails) {
  return {
    cancel: true,
  };
}

// block unnecessary assets
browser.webRequest.onBeforeRequest.addListener(
  blockAssets,
  {
    urls: formatDotcoms(devil_corp), 
    types: ['font', 'media', 'object', 'sub_frame']
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
