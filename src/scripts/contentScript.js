// import browser from 'webextension-polyfill';

// let gettingItem = browser.storage.local.get(['replaceBy']);
// gettingItem.then(onGot, onError);

// function onGot(result){
//   const elements = document.getElementsByTagName('*');
//   const replaceBy = result.replaceBy;

//   if( replaceBy.active){
//     const value = replaceBy.value
//     for (let i = 0, lg = elements.length; i < lg; i++) {
//       let element = elements[i];
//       for (let j = 0, lgj = element.childNodes.length; j < lgj; j++) {
//         let node = element.childNodes[j];
//         if (node.nodeType === 3) {
//           let text = node.nodeValue;
//           if(text.indexOf('Bezos') !== -1){
//             let replacedText = text.replace(/Jeff Bezos/gi, value).replace(/Jeffrey Bezos/gi, value).replace(/Jeffrey Preston Bezos/gi, value);
//             if (replacedText !== text) {
//               element.replaceChild(document.createTextNode(replacedText), node);
//             } 
//           }
//         }
//       }
//     } 
//   }
// }

// function onError(e){
//   console.log('error', e);
// }