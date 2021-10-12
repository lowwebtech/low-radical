import browser from "webextension-polyfill";

export const params = [
  "blockType",
  "awsDetect",
  "google",
  "amazon",
  "facebook",
  "apple",
  "microsoft",
  // replaceBy
];

export function getParams(callback, onChanged) {
  const gettingItem = browser.storage.local.get(params);
  gettingItem.then(callback, (error) => {
    console.log(error);
  });

  // const gettingItem = browser.storage.local.get(params)
  // gettingItem.then(onGot, onError)

  // browser.storage.onChanged.addListener(onChanged)
}
