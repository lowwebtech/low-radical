import browser from 'webextension-polyfill';

function save() {
  browser.storage.local.set({
    blockType: document.querySelector('input[name="blockType"]:checked').value,
    replaceBy: document.querySelector('input[name="replaceBy"]').value,
  });
}

function restore() {
  let getting = browser.storage.local.get(['blockType', 'replaceBy']);
  getting.then(
    (result) => {
      let replaceBy = result.replaceBy || 'Jeff 🖕 Bezos'
      let blockType = result.blockType || 'blockAll'
      document.querySelector('input[name="replaceBy"]').value = replaceBy
      document.querySelector('input[value="'+ blockType + '"]').checked = true
      // document.querySelector('#color').value = result.color || 'blue';
    }, 
    (error) => {
      console.log(`Error: ${error}`);
    });
}

document.addEventListener('DOMContentLoaded', ()=>{
  let inputs = document.querySelectorAll('input')
  inputs.forEach((input)=>{
    input.addEventListener('input', (e)=>{
      save()
    })
  })
  restore()
});