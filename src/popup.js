import browser from 'webextension-polyfill'

require('./styles/styles.scss')
require('./scripts/comp/form.js')

// document.addEventListener('DOMContentLoaded', () => {
//   const btWhitelist = document.querySelector('button.whitelist')
//   btWhitelist.addEventListener('click', () => {
    
//     const tab = getCurrentTab()
//     console.log(tab)

//     // console.log(document.querySelector('button'))
//   })

//   console.log(window.location)
//   getCurrentTab()
// })

// function getCurrentTab() {
//   browser.tabs.query({ currentWindow: true, active: true }).then((tabs) => {
//     let tab = tabs[0] // Safe to assume there will only be one result
//     console.log("->", tab)
//   }, console.error)
// }
