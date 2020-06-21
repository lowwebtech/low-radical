import browser from 'webextension-polyfill';
import { formatDotcoms, amazon } from '../data/amazon_urls';

export function degrade(){

  // block unnecessary assets
  browser.webRequest.onBeforeRequest.addListener(
    blockAssets,
    {
      urls: formatDotcoms(amazon), 
      types: ['font', 'media', 'object', 'sub_frame']
    },
    ['blocking']
  );

  // insert grayscale css
  browser.tabs.onUpdated.addListener(onTabUpdate);

}

export function undegrade(){

  browser.webRequest.onBeforeRequest.removeListener(blockAssets)
  browser.tabs.onUpdated.removeListener(onTabUpdate)

}

function onTabUpdate(tabId, changeInfo, tab){
  if( changeInfo.status == 'loading' ){
    var re = new RegExp("^(http|https)://", "i");
    var match = re.test(tab.url);
    if (match) {
      for (let i = 0, lg = amazon.length; i<lg; i++) {
        if (tab.url.indexOf(amazon[i]) !== -1) {
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

function blockAssets(requestDetails) {
  return {
    cancel: true,
  };
}
