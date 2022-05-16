import browser from 'webextension-polyfill'
import { initParams } from './data/params'

browser.runtime.onInstalled.addListener(async ({ reason, temporary }) => {
  // if (temporary) return; // skip during development
  switch (reason) {
    case 'install':
      await browser.runtime.openOptionsPage()
      break
  }
})

initParams().then(() => {}, console.error)
