import browser from 'webextension-polyfill';
import getHostname from '../utils/get-hostname';

const networkFilters = {
  urls: ['*://*/*'],
};

class RequestManager {
  constructor() {
    this.tabStorage = {};
  }
  getTab(tabId) {
    return this.tabStorage[tabId.toString()];
  }
  getCurrentTab() {
    // return this.tabStorage[browser.tabs.getCurrent()];
  }
  init() {
    browser.webRequest.onBeforeRequest.addListener(
      details => {
        const { tabId, requestId } = details;
        if (!this.tabStorage.hasOwnProperty(tabId)) {
          this.addTab(tabId);
        }
        if (this.tabStorage[tabId.toString()]) {
          this.tabStorage[tabId.toString()].requests[requestId] = {
            requestId: requestId,
            url: details.url,
            startTime: details.timeStamp,
            status: 'pending',
          };
        }
        return {};
      },
      networkFilters,
      ['blocking']
    );

    browser.webRequest.onCompleted.addListener(details => {
      const { tabId, requestId } = details;
      if (!this.tabStorage.hasOwnProperty(tabId.toString()) || !this.tabStorage[tabId.toString()].requests.hasOwnProperty(requestId)) {
        return;
      }
      const request = this.tabStorage[tabId.toString()].requests[requestId];
      Object.assign(request, {
        endTime: details.timeStamp,
        requestDuration: details.timeStamp - request.startTime,
        status: 'complete',
      });
    }, networkFilters);

    browser.webRequest.onErrorOccurred.addListener(details => {
      const { tabId, requestId } = details;
      if (!this.tabStorage.hasOwnProperty(tabId.toString()) || !this.tabStorage[tabId.toString()].requests.hasOwnProperty(requestId)) {
        return;
      }
      const request = this.tabStorage[tabId.toString()].requests[requestId];
      Object.assign(request, {
        endTime: details.timeStamp,
        status: 'error',
      });
    }, networkFilters);

    browser.tabs.onUpdated.addListener(tabId => {
      this.addTab(tabId);
    });

    // browser.webNavigation.onBeforeNavigate.addListener(info => {
    //   if (info.frameId === 0) {
    //     const hostname = getHostname(info.url);
    //     if (hostname) {
    //       if (!this.tabStorage[info.tabId]) {
    //         this.addTab(info.tabId);
    //       }
    //       this.tabStorage[info.tabId].pageUrl = info.url;
    //       this.tabStorage[info.tabId].domain = hostname;
    //     }
    //   }
    // });

    browser.tabs.onActivated.addListener(tab => {
      const tabId = tab ? tab.tabId : browser.tabs.TAB_ID_NONE;
      this.currentTabId = tabId;
      this.addTab(tabId);
    });

    browser.tabs.onRemoved.addListener(tabId => {
      if (!this.tabStorage.hasOwnProperty(tabId)) {
        return;
      }
      delete this.tabStorage[tabId];
    });
  }
  addTab(tabId) {
    if (tabId && !this.tabStorage.hasOwnProperty(tabId) && tabId !== -1) {
      this.tabStorage[tabId] = {
        id: tabId,
        requests: {},
        url: '',
        registerTime: new Date().getTime(),
      };
    }
  }
}

let requestManager = new RequestManager();
export default requestManager;
