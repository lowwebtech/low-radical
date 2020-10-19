import browser from "webextension-polyfill";
import { formatDotcoms, amazon } from "../data/amazon-urls";

let isBlocking = false;
export function block() {
  if (!isBlocking) {
    isBlocking = true;
    browser.webRequest.onBeforeRequest.addListener(
      blockDotComs,
      {
        urls: formatDotcoms(amazon),
        types: ["main_frame", "sub_frame"],
      },
      ["blocking"]
    );
  }
}

export function unblock() {
  if (isBlocking) {
    isBlocking = false;
    browser.webRequest.onBeforeRequest.removeListener(blockDotComs);
  }
}

function blockDotComs(requestDetails) {
  const { type, url } = requestDetails;
  const hostname = parseURL(url).hostname.replace("www.", "");

  const r = {};
  if (type === "main_frame") {
    r.redirectUrl = browser.runtime.getURL(
      "assets/fallback.html?from=" + hostname
    );
  } else {
    r.cancel = true;
  }

  return r;
}

function parseURL(url) {
  var parser = document.createElement("a");
  var searchObject = {};
  var queries;
  var split;
  var i;
  // Let the browser do the work
  parser.href = url;
  // Convert query string to object
  queries = parser.search.replace(/^\?/, "").split("&");
  for (i = 0; i < queries.length; i++) {
    split = queries[i].split("=");
    searchObject[split[0]] = split[1];
  }
  return {
    protocol: parser.protocol,
    host: parser.host,
    hostname: parser.hostname,
    port: parser.port,
    pathname: parser.pathname,
    search: parser.search,
    searchObject: searchObject,
    hash: parser.hash,
  };
}
