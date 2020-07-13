import browser from 'webextension-polyfill';


const replaceByEl = document.querySelector('input[name="replaceBy"]')
const awsDetectEl = document.querySelector('input[name="awsDetect"]')

function save() {
  const data = {
    blockType: document.querySelector('input[name="blockType"]:checked').value,
  }

  if(replaceByEl){
    data.replaceBy = replaceByEl.value
  }
  if(awsDetectEl){
    data.awsDetect = awsDetectEl.value
  }
  
  browser.storage.local.set( data );
}

function restore() {
  let getting = browser.storage.local.get(['blockType', 'replaceBy', 'awsDetect']);
  getting.then(
    (result) => {
      let blockType = result.blockType || 'blockAll'
      document.querySelector('input[value="'+ blockType + '"]').checked = true

      if(replaceByEl){
        let replaceBy = result.replaceBy || 'Jeff 🖕 Bezos'
        replaceByEl.value = replaceBy 
      }

      if(awsDetectEl){
        console.log('AWS', result.awsDetect, awsDetect) 
        let awsDetect = result.awsDetect
        awsDetectEl.checked = awsDetect
      }
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