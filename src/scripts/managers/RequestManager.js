import browser from "webextension-polyfill";

const networkFilters = {
  urls: ["*://*/*"],
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
      (details) => {
        const { tabId, requestId } = details;
        if (!Object.prototype.hasOwnProperty.call(this.tabStorage, tabId)) {
          this.addTab(tabId);
        }
        if (this.tabStorage[tabId.toString()]) {
          this.tabStorage[tabId.toString()].requests[requestId] = {
            requestId: requestId,
            url: details.url,
            startTime: details.timeStamp,
            status: "pending",
          };
        }
        return {};
      },
      networkFilters,
      ["blocking"]
    );

    browser.webRequest.onCompleted.addListener((details) => {
      const { tabId, requestId } = details;
      if (
        !Object.prototype.hasOwnProperty.call(
          this.tabStorage,
          tabId.toString()
        ) ||
        !Object.prototype.hasOwnProperty.call(
          this.tabStorage[tabId.toString()].requests,
          requestId
        )
      ) {
        return;
      }
      const request = this.tabStorage[tabId.toString()].requests[requestId];
      Object.assign(request, {
        endTime: details.timeStamp,
        requestDuration: details.timeStamp - request.startTime,
        status: "complete",
      });
    }, networkFilters);

    browser.webRequest.onErrorOccurred.addListener((details) => {
      const { tabId, requestId } = details;
      if (
        !Object.prototype.hasOwnProperty.call(
          this.tabStorage,
          tabId.toString()
        ) ||
        !Object.prototype.hasOwnProperty.call(
          this.tabStorage[tabId.toString()].requests,
          requestId
        )
      ) {
        return;
      }
      const request = this.tabStorage[tabId.toString()].requests[requestId];
      Object.assign(request, {
        endTime: details.timeStamp,
        status: "error",
      });
    }, networkFilters);

    browser.tabs.onUpdated.addListener((tabId) => {
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

    browser.tabs.onActivated.addListener((tab) => {
      const tabId = tab ? tab.tabId : browser.tabs.TAB_ID_NONE;
      this.currentTabId = tabId;
      this.addTab(tabId);
    });

    browser.tabs.onRemoved.addListener((tabId) => {
      if (!Object.prototype.hasOwnProperty.call(this.tabStorage, tabId)) {
        return;
      }
      delete this.tabStorage[tabId];
    });
  }

  addTab(tabId) {
    if (
      tabId &&
      !Object.prototype.hasOwnProperty.call(this.tabStorage, tabId) &&
      tabId !== -1
    ) {
      this.tabStorage[tabId] = {
        id: tabId,
        requests: {},
        url: "",
        registerTime: new Date().getTime(),
      };
    }
  }
}

const requestManager = new RequestManager();
export default requestManager;
