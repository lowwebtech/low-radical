import { formatDotcoms, dotcoms, corp_dotcoms } from './amazon_urls';

const elements = document.getElementsByTagName('*');

for (let i = 0; i < elements.length; i++) {
  let element = elements[i];
  for (let j = 0; j < element.childNodes.length; j++) {
    let node = element.childNodes[j];
    if (node.nodeType === 3) {
      let text = node.nodeValue;
      let replacedText = text.replace(/Jeff Bezos/gi, 'Jeff Devil Bezos');
      if (replacedText !== text) {
        element.replaceChild(document.createTextNode(replacedText), node);
      }
    }
  }
}


for (let i = 0, lg = corp_dotcoms.length; i<lg; i++) {
  if (window.location.hostname.indexOf(corp_dotcoms[i]) !== -1) {
    document.body.style.filter = 'grayscale(1)';
  }
}