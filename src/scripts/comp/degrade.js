import browser from 'webextension-polyfill';
import { formatDotcoms, amazon } from '../data/amazon_urls';
import { formatedCssRules } from '../data/css_rules';

let isDegrading = false

export function degrade(){

  if(!isDegrading){
    isDegrading = true

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

}

export function undegrade(){

  if(isDegrading){
    isDegrading = false
    browser.webRequest.onBeforeRequest.removeListener(blockAssets)
    browser.tabs.onUpdated.removeListener(onTabUpdate) 
  }

}

function onTabUpdate(tabId, changeInfo, tab){
  if( changeInfo.status == 'loading' ){
    var re = new RegExp("^(http|https)://", "i");
    var match = re.test(tab.url);
    if (match) {
      for (let i = 0, lg = amazon.length; i<lg; i++) {
        if (tab.url.indexOf(amazon[i]) !== -1) {
          console.log('degrade', amazon[i]);
          let specificRules = getDegradedCSS(amazon[i]);
          let code = `
              * { transition: none !important; animation: none !important; }
              body { filter: grayscale(1); }
              ${specificRules}
              `;

          browser.tabs.insertCSS(tabId, {
            code: code
          });
        }
      } 
    }
  }
}

function getDegradedCSS( website ){
  if(formatedCssRules[ website ]){
    return formatedCssRules[ website ] + '{ display:none!important; }';
  }else{
    return '';
  }
}


function blockAssets(requestDetails) {
  return {
    cancel: true,
  };
}
