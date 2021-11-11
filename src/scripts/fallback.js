import { parseURL } from './data/urls'

document.addEventListener("DOMContentLoaded", () => {
  const url = getOriginUrl();
  const host = parseURL(url).hostname.replace('www.','')
  document.title = host + " is blocked by low-radical";
  document.querySelector("h1 span").innerText = host;
  document.body.dataset.origin = url
});

function getOriginUrl() {
  const queryString = window.location.search.substring(1);
  const urlParams = new URLSearchParams(queryString);
  const from = urlParams.get("from");
  return from;
}
