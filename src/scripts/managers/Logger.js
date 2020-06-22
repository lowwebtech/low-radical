import browser from 'webextension-polyfill';
import RequestManager from './RequestManager';
import isAmazon from '../utils/is-amazon-request.js';

class Logger {
  constructor() {
    this.logs = {};

    this.onCreatedHandler = tab => {
      this.logs[tab.tabId] = [];
    };
    this.onTabActivatedHandler = tab => {
      // console.log('onTabActivated', tab.tabId)
      this.currentTab = tab;
      this.updateBadgeNumber(tab.tabId);
    };
    this.onTabUpdatedHandler = (tabId, changeInfo, tabInfo) => {
      if (changeInfo.url) {
        this.logs[tabId] = [];
        this.updateBadgeNumber(tabId);
      }
      if (changeInfo.status === 'loading') {
      } else if (changeInfo.status === 'complete') {
        // this.updateBadgeNumber(tabId);
      }
    };
    this.onCommittedNavigationHandler = info => {
      // console.log('onCommitted', info.transitionType, info);
      if (info.transitionType === 'reload' || info.transitionType === 'link') {
        this.logs[info.tabId] = [];
        this.updateBadgeNumber(info.tabId);
      }
    };
    this.onBeforeNavigationHandler = info => {
      // console.log('onBeforeNavigate', info);
      if (info.frameId === 0) {
        this.logs[info.tabId] = [];
        this.updateBadgeNumber(info.tabId);
      }
    };
  }

  enable() {
    this.currentTab = undefined;

    browser.tabs.onCreated.addListener(this.onCreatedHandler);
    browser.tabs.onUpdated.addListener(this.onTabUpdatedHandler);
    browser.tabs.onActivated.addListener(this.onTabActivatedHandler);
    // browser.history.onVisited.addListener(this.onVisitedHandler);
    browser.webNavigation.onCommitted.addListener(this.onCommittedNavigationHandler);
    browser.webNavigation.onBeforeNavigate.addListener(this.onBeforeNavigationHandler);

    if (browser.browserAction.setBadgeTextColor) {
      browser.browserAction.setBadgeTextColor({ color: '#FFF' });
    }
  }

  disable(){
    browser.tabs.onCreated.removeListener(this.onCreatedHandler);
    browser.tabs.onUpdated.removeListener(this.onTabUpdatedHandler);
    browser.tabs.onActivated.removeListener(this.onTabActivatedHandler);
    // browser.history.onVisited.removeListener(this.onVisitedHandler);
    browser.webNavigation.onCommitted.removeListener(this.onCommittedNavigationHandler);
    browser.webNavigation.onBeforeNavigate.removeListener(this.onBeforeNavigationHandler);

    browser.browserAction.setBadgeText({ text: '' });
    // if (browser.browserAction.setBadgeTextColor) {
    //   browser.browserAction.setBadgeTextColor({ color: '#FFF' });
    // }
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

      let str = '';
      let color = '#FFFFFF';
      if (tab && !isNaN(nb)) {
        if (nb > 0.25) {
          str = 'SHIT';
          color = '#625300';
        }
      }

      browser.browserAction.setBadgeText({ text: str, tabId: tabId });
      browser.browserAction.setBadgeBackgroundColor({ color: color });
    }
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

let logger = new Logger();
export default logger;
