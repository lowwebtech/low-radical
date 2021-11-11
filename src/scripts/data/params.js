import browser from 'webextension-polyfill'

export const params = [
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
