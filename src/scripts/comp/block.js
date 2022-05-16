import browser from 'webextension-polyfill'
import { getDotComs } from '../data/urls'

export function updateBlockingRules() {
  getDotComs().then((dotcoms) => {
    // console.log(dotcoms)
    browser.declarativeNetRequest.getDynamicRules().then((rules) => {
      // console.log('--->', rules)
      const oldRuleIds = rules.map((rule, i) => i + 1)
      const newRules = dotcoms.map((dotcom, i) => {
        return {
          id: i + 1,
          priority: 1,
          action: {
            type: 'block',
          },
          condition: {
            urlFilter: dotcom,
            resourceTypes: ['main_frame'],
          },
        }
      })

      // console.log(oldRuleIds)
      console.log('new', newRules)
      console.log('new', newRules.length)

      browser.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: oldRuleIds,
        addRules: newRules,
      })

      browser.declarativeNetRequest.getDynamicRules().then((rules) => {
        console.log('current', rules.length)
      })
    })
  })
}
