import browser from 'webextension-polyfill';

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


function redirect(requestDetails) {
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

const patterns = ['*://*.amazon.com/*', '*://*.amazon.com.au/*', '*://*.amazon.de/*', '*://*.amazon.com.br/*', '*://*.amazon.ca/*', '*://*.amazon.cn/*', '*://*.amazon.es/*', '*://*.amazon.in/*', '*://*.amazon.it/*', '*://*.amazon.co.jp/*', '*://*.amazon.mx/*', '*://*.amazon.nl/*', '*://*.amazon.co.uk/*', '*://*.amazon.ae/*', '*://*.amazon.com.tr/*', '*://*.amazon.ca/*', '*://*.amazon.fr/*'];

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls: patterns},
  ['blocking']
);