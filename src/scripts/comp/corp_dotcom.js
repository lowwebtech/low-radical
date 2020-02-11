import browser from 'webextension-polyfill';
import { formatDotcoms, corp_degrade, devil_corp } from '../data/amazon_urls';

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
browser.tabs.onUpdated.addListener(
  function(tabId, changeInfo, tab){
    if( changeInfo.status == 'loading' ){
      var re = new RegExp("^(http|https)://", "i");
      var match = re.test(tab.url);
      if (match) {
        for (let i = 0, lg = corp_degrade.length; i<lg; i++) {
          if (tab.url.indexOf(corp_degrade[i]) !== -1) {
            browser.tabs.insertCSS(tabId, {
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
