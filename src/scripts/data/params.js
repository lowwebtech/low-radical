import browser from 'webextension-polyfill'

export const params = [
  'blockType',
  'whitelist',

  'google',
  'amazon',
  'facebook',
  'apple',
  'microsoft',

  // "awsDetect",
  // "replaceBy",
]

export function setDefaultParams() {
  return setParams({
    blockType: 'blockAll',
    whitelist: [],
    google: false,
    amazon: true,
    facebook: false,
    apple: false,
    microsoft: false,
  })
}
export function setParams(p) {
  browser.storage.local.set(p)
}
export function getParams() {
  return browser.storage.local.get(params)
}
