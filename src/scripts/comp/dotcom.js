import browser from 'webextension-polyfill';
import { formatDotcoms, dotcoms } from '../data/amazon_urls';

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

browser.webRequest.onBeforeRequest.addListener(
  blockDotComs,
  {urls: formatDotcoms(dotcoms)},
  ['blocking']
);
