import browser from 'webextension-polyfill';
import { formatDotcoms, amazon } from '../data/amazon_urls';

export function block(){

  browser.webRequest.onBeforeRequest.addListener(
    blockDotComs,
    {urls: formatDotcoms(amazon)},
    ['blocking']
  );

}

export function unblock(){
  
  browser.webRequest.onBeforeRequest.removeListener(blockDotComs);
  
}

function blockDotComs(requestDetails) {
  const { type, url } = requestDetails;
  let r = {};
  if (type === 'main_frame') {
    r.redirectUrl = browser.runtime.getURL('assets/fallback.html');
  }else{
    r.cancel = true;
  } 
  return r;
}
