import * as ABPFilterParser from 'abp-filter-parser';

let blockRequests = [];
let lists = [];
let abpFilters = {};

class Blocker {
  init() {
    this.filterRequest(blockUrls);
  }
  filterRequest(callback, filter = {}, extraInfoSpec = ['blocking']) {
    filter = Object.assign({ urls: ['*://*/*'] }, filter);

    const blockRequest = new BlockRequest(callback, filter);
    blockRequests.push(blockRequest);

    browser.webRequest.onBeforeRequest.addListener(blockRequest.callback, filter, extraInfoSpec);

    return blockRequest;
  }
  unfilterRequest(blockRequest) {
    if (blockRequests.indexOf(blockRequest) !== -1) {
      blockRequests.splice(blockRequests.indexOf(blockRequest), 1);
      if (browser.webRequest.onBeforeRequest.hasListener(blockRequest.callback)) {
        browser.webRequest.onBeforeRequest.removeListener(blockRequest.callback);
      }
    }
  }
  addListToBlock(list) {
    if (lists.indexOf(list) === -1) {
      lists.push(list);
      ABPFilterParser.parse(list, abpFilters);
    }
  }
  removeListToBlock(list) {
    if (lists.indexOf(list) !== -1) {
      lists.splice(lists.indexOf(list), 1);
      this.recreateListToBlock();
    }
  }
  recreateListToBlock() {
    abpFilters = {};
    for (let i = 0; i < lists.length; i++) {
      ABPFilterParser.parse(lists[i], abpFilters);
    }
  }
}

const blockUrls = function(details) {
  let cancel;
  let response = {};

  const { url, type } = details;
  cancel = ABPFilterParser.matches(abpFilters, url, {
    // domain: tab.domain,
    // elementTypeMaskMap: ABPFilterParser.elementTypes.IMAGE,
  });

  if (cancel) {
    // if (type === 'image') {
    //   response.redirectUrl = dataImage();
    // } else {
    //   response.cancel = true;
    // }
    response.cancel = true;
  }

  return response;
};

class BlockRequest {
  constructor(callback, filter) {
    this.callback = details => {
      const { tabId } = details; // url, type
      if (tabId !== -1) {
        const response = callback(details);
        return response;
      }
      return {};
    };
    this.filter = filter;
  }
}

let blocker = new Blocker();
export default blocker;
