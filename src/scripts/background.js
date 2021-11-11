import browser from 'webextension-polyfill'

import { block, unblock } from './comp/block'
import { setDefaultParams } from './data/params'
import RequestManager from './managers/RequestManager'

RequestManager.init()

function start() {
  block()

  browser.storage.onChanged.addListener(update)
}

function update() {
  unblock()
  block()
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

start()