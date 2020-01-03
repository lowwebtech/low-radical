import browser from 'webextension-polyfill';
import RequestManager from './RequestManager';

class Logger {
  constructor() {
    this.logs = {};
  }
  init() {
    this.currentTab = undefined;
    const onCreatedHandler = tab => {
      this.logs[tab.tabId] = [];
    };
    const onTabActivatedHandler = tab => {
      // console.log('onTabActivated', tab.tabId)
      this.currentTab = tab;
      this.updateBadgeNumber(tab.tabId);
    };
    const onTabUpdatedHandler = (tabId, changeInfo, tabInfo) => {
      if (changeInfo.url) {
        this.logs[tabId] = [];
        this.updateBadgeNumber(tabId);
      }
      if (changeInfo.status === 'loading') {
      } else if (changeInfo.status === 'complete') {
        // this.updateBadgeNumber(tabId);
      }
    };
    const onCommittedNavigationHandler = info => {
      // console.log('onCommitted', info.transitionType, info);
      if (info.transitionType === 'reload' || info.transitionType === 'link') {
        this.logs[info.tabId] = [];
        this.updateBadgeNumber(info.tabId);
      }
    };
    const onBeforeNavigationHandler = info => {
      // console.log('onBeforeNavigate', info);
      if (info.frameId === 0) {
        this.logs[info.tabId] = [];
        this.updateBadgeNumber(info.tabId);
      }
    };
    browser.tabs.onCreated.addListener(onCreatedHandler);
    browser.tabs.onUpdated.addListener(onTabUpdatedHandler);
    browser.tabs.onActivated.addListener(onTabActivatedHandler);
    // browser.history.onVisited.addListener(onVisitedHandler);
    browser.webNavigation.onCommitted.addListener(onCommittedNavigationHandler);
    browser.webNavigation.onBeforeNavigate.addListener(onBeforeNavigationHandler);

    if (browser.browserAction.setBadgeTextColor) {
      browser.browserAction.setBadgeTextColor({ color: '#FFF' });
    }
  }
  logRequest(details) {
    const { type, url, tabId } = details;

    if (this.logs[tabId] === undefined) {
      this.logs[tabId] = [];
    }

    const l = this.logs[tabId];
    l.push(isAmazon(details));

    this.updateBadge(tabId);
  }

  updateBadge(tabId, delay = 500) {
    if (this.timeoutBadge) {
      clearTimeout(this.timeoutBadge);
    }

    this.timeoutBadge = setTimeout(() => {
      this.updateBadgeNumber(tabId);
    }, delay);
  }
  updateBadgeNumber(tabId) {
    if (tabId !== -1 && this.currentTab && tabId === this.currentTab.tabId) {
      const tab = RequestManager.getTab(tabId);
      const nb = this.getNumberBlocked(tabId);

      console.log('updateBadgeNumber', nb, tab);

      let str = '';
      let color = '#FFFFFF';
      if (tab && !isNaN(nb)) {
        if (nb > 0.25) {
          str = 'coal';
          color = '#625300';
        }
      }

      browser.browserAction.setBadgeText({ text: str });
      browser.browserAction.setBadgeBackgroundColor({ color: color });
    }

    /*let str = '';
    let color;
    if (isNaN(nb) || nb === -1 || !tab) {
      str = '';
      browser.browserAction.setBadgeText({ text: str });
    }else if(tab) {
      if (nb > 0.3) {
        color = '#4d3800';
      }else{
        color = '#00b900';
      }
      browser.browserAction.setBadgeText({ text: str });
      browser.browserAction.setBadgeBackgroundColor({ color: color });      
    }*/

    
  }
  getNumberBlocked(tabId) {
    if (this.logs[tabId]) {
      let logs = this.logs[tabId];
      if (logs.length > 0) {
        let nb = 0;
        for (let i = 0, lg = logs.length; i<lg; i++) {
          if (logs[i] === true) {
            nb++;
          }
        }
        return nb / logs.length;
      }else{
        return 0;
      }
    }
    return -1;
  }
}

function isAmazon(details) {
  const headers = details.responseHeaders;
  let isAmazon = false;
  const matches = [
    ['x-amz-cf-pop', -1],
    ['x-amz-cf-id', -1],
    ['x-amz-request-id', -1],
    ['x-amz-id', -1],
    ['x-amz-id-2', -1],
    ['x-amz-meta-s3cmd-attrs', -1],
    ['vary', '-amzn-'],
    ['via', 'cloudfront'],
    ['x-cache', 'cloudfront'],
    ['server', 'amazon'],
  ];
  // console.log(headers)
  for (let i = 0, lg = headers.length; i<lg; i++) {
    for (let j = 0, lgj = matches.length; j<lgj; j++) {
      // console.log(headers[i].name, matches[j][0])
      if (headers[i].name === matches[j][0]) {
        // console.log(headers[i].value.toLowerCase())
        if (headers[i].value.toLowerCase().indexOf(matches[j][1]) !== -1 || matches[j][1] === -1) {
          // console.log(headers[i], details)
          return true;
        }
      } 
    }
  }
  return false;
}

let logger = new Logger();
export default logger;
