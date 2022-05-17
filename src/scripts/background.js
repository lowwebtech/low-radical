import browser from 'webextension-polyfill'
import { updateBlockingRules } from './comp/block'
import { initParams } from './data/params'

browser.runtime.onInstalled.addListener(async ({ reason, temporary }) => {
  // if (temporary) return; // skip during development
  switch (reason) {
    case 'install':
      await browser.runtime.openOptionsPage()
      break
  }
})

browser.storage.onChanged.addListener((changes, areaName)=>{
  if(areaName === 'local'){
    updateBlockingRules()
  }
})
initParams().then(() => {}, console.error)

