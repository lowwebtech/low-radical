export const dotcoms = ['amazon.com', 'amazon.com.au', 'amazon.de', 'amazon.com.br', 'amazon.ca', 'amazon.cn', 'amazon.es', 'amazon.in', 'amazon.it', 'amazon.co.jp', 'amazon.mx', 'amazon.nl', 'amazon.co.uk', 'amazon.ae', 'amazon.com.tr', 'amazon.ca', 'amazon.fr', 'amazon.com.sg', 'amazon.sg', 'amazon.ch'];

export const corp_dotcoms = ['audible.com', 'audible.ca', 'audible.co.uk', 'audible.de', 'audible.fr', 'audible.it', 'audible.com.au', 'audible.in', 'audible.co.jp',
  'twitch.tv', 
  'imdb.com', 'boxofficemojo.com',
  'alexa.com', 'fabric.com', 'ring.com',
  'wholefoodsmarket.com', 'wholefoodsmarket.co.uk',
  'goodreads.com', 'abebooks.com', 'abebooks.co.uk', 'abebooks.de', 'abebooks.fr', 'abebooks.it', 'iberlibro.com', 'zvab.com', 'bookfinder.com', 'fillz.com', 
  'shopbop.com', 'withoutabox.com', 'dpreview.com', 'lexcycle.com', 'woot.com', 'comixology.com', 'comixology.eu', 'comixology.fr', 'comixology.co.uk', 'blinkforhome.com', 'blinkforhome.co.uk', 'blinkforhome.de', 'cloudendure.com',
  'blueorigin.com', 'washingtonpost.com', 'bezosexpeditions.com', 'bezosdayonefund.org', 'bezosfamilyfoundation.org', '10000yearclock.net'
];

export const assets_dotcoms = ['media-amazon.com', 'twitchcdn.net']

export function formatDotcoms(array) {
  let newArray = [];
  for (let i = 0, lg = array.length; i<lg; i++) {
    newArray.push('*://*.'+array[i]+'/*');
  }
  return newArray;
}