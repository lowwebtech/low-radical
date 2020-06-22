export const amazon_dotcoms = [
  'amazon.com', 'amazon.com.au', 'amazon.de', 'amazon.com.br', 'amazon.ca', 'amazon.cn', 'amazon.es', 'amazon.in', 'amazon.it', 'amazon.co.jp', 'amazon.mx', 'amazon.nl', 'amazon.co.uk', 'amazon.ae', 'amazon.com.tr', 'amazon.ca', 'amazon.fr', 'amazon.com.sg', 'amazon.sg', 'amazon.ch', 
];

export const audible_dotcoms = [
  'audible.com', 'audible.ca', 'audible.co.uk', 'audible.de', 'audible.fr', 'audible.it', 'audible.com.au', 'audible.in', 'audible.co.jp',
];
export const abe_dotcoms = [
  'abebooks.com', 'abebooks.co.uk', 'abebooks.de', 'abebooks.fr', 'abebooks.it', 'iberlibro.com', 'zvab.com',
];
export const comixology_dotcoms = [
  'comixology.com', 'comixology.eu', 'comixology.fr', 'comixology.co.uk',
];
export const aboutamazon_dotcoms = [
  'aboutamazon.eu', 'aboutamazon.com', 'aboutamazon.co.uk', 'aboutamazon.it', 'aboutamazon.com', 'aboutamazon.fr', 'aboutamazon.in', 'aboutamazon.de',
];

export const corp_dotcoms = audible_dotcoms.concat( 
  audible_dotcoms,
  abe_dotcoms,
  comixology_dotcoms,
  aboutamazon_dotcoms,
  [
    'amazon.work', 
    'amazon.science',

    'mturk.com', 
    'amzn.to',
    
    'goodreads.com', 
    'bookfinder.com',
    'librarything.com',

    'twitch.tv', 
    'wholefoodsmarket.com', 'wholefoodsmarket.co.uk',
    'washingtonpost.com',
    'imdb.com', 
    'blueorigin.com',
    'alexa.com', 
    'fabric.com', 
    'cloudendure.com',
    'ring.com',
    'fillz.com', 
    'boxofficemojo.com',
    'shopbop.com', 
    'withoutabox.com', 
    'dpreview.com', 
    'lexcycle.com', 
    'woot.com', 
    'blinkforhome.com', 'blinkforhome.co.uk', 'blinkforhome.de', 

    'bezosexpeditions.com', 
    'bezosdayonefund.org', 
    'bezosfamilyfoundation.org', 
    '10000yearclock.net',
  ]
);

export const corp_cdn_dotcoms = [
  'media-amazon.com', 
  'twitchcdn.net',
  'cloudfront.net',
  'amazonaws.com'
];

export const amazon = amazon_dotcoms.concat(corp_dotcoms);

export function formatDotcoms(array) {
  let newArray = [];
  for (let i = 0, lg = array.length; i<lg; i++) {
    newArray.push('*://*.'+array[i]+'/*');
  }
  return newArray;
}