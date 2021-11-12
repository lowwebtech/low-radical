import browser from 'webextension-polyfill'
import { subgroupIds } from './datas'
const params = ['whitelist', ...subgroupIds]

export async function initParams() {
  const keys = getParams()
  const localParams = getLocalParams(keys)

  await localParams.then((local) => {
    const o = {}
    keys.forEach((key) => {
      if (typeof local[key] === 'undefined') {
        console.log('key', key)
        o[key] = true
      }
    })

    if (typeof local.whitelist === 'undefined') o.whitelist = []

    setParams(o)

    return
  }, console.error)
}
export function setParams(p) {
  browser.storage.local.set(p)
}
export function getParams() {
  return params
}

export function getLocalParams(params) {
  const p = params || getParams()
  return browser.storage.local.get(p)
}
