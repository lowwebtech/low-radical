import browser from 'webextension-polyfill'

import { block, unblock } from './comp/block'
import { getParams, setDefaultParams } from './data/params'
import RequestManager from './managers/RequestManager'

RequestManager.init()

function start() {
  update()
  browser.storage.onChanged.addListener(update)
}

function update() {
  getParams().then((params) => {
    unblock()
    block()
  }, console.error)
}

browser.runtime.onInstalled.addListener(async ({ reason, temporary }) => {
  // if (temporary) return; // skip during development
  switch (reason) {
    case 'install':
      setDefaultParams()
      await browser.runtime.openOptionsPage()
      break
  }
})

setTimeout(() => {
  start()
}, 300)
