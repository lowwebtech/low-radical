import browser from 'webextension-polyfill'
import { updateBlockingRules } from '../comp/block'
import { subgroupIds } from './datas'

const params = ['whitelist', ...subgroupIds]

export async function initParams() {
  const keys = getParams()
  const localParams = getLocalParams(keys)

  // get user preferences, then set default new preferences (undefined) to true
  await localParams.then((local) => {
    console.log(local)
    const o = {}
    keys.forEach((key) => {
      if (typeof local[key] === 'undefined') {
        console.log('key', key)
        o[key] = true
      }
    })

    if (typeof local.whitelist === 'undefined') o.whitelist = []

    setParams(o)
  }, console.error)
}

export async function setParams(p) {
  browser.storage.local.set(p)

  updateBlockingRules()
}

export function getParams() {
  return params
}

export function getLocalParams(params) {
  const p = params || getParams()
  return browser.storage.local.get(p)
}
