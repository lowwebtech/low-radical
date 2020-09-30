export const amazon_dotcoms = [
  'amazon.com', 'amazon.com.au', 'amazon.de', 'amazon.com.br', 'amazon.ca', 'amazon.cn', 'amazon.es', 'amazon.in', 'amazon.it', 'amazon.co.jp', 'amazon.mx', 'amazon.nl', 'amazon.co.uk', 'amazon.ae', 'amazon.com.tr', 'amazon.ca', 'amazon.fr', 'amazon.com.sg', 'amazon.sg', 'amazon.ch', 

  'amazon.eu',
  'amazon.nl',
  'amazon.at',
  'amazon.co',
  'amazon.cz',
  'amazon.dk',
  'amazon.gr',
  'amazon.hu',
  'amazon.id',
  'amazon.ie',
  'amazon.io',
  'amazon.jp',
  'amazon.kr',
  'amazon.lu',
  'amazon.me',
  'amazon.mk',
  'amazon.no',
  'amazon.or',
  'amazon.pl',
  'amazon.pt',
  'amazon.ro',
  'amazon.rs',
  'amazon.ru',
  'amazon.sa',
  'amazon.su',
  'amazon.clothing',
  'amazon.company',
  'amazon.cruises',
  'amazon.dog',
  'amazon.energy',
  'amazon.express',
  'amazon.fund',
  'amazon.game',
  'amazon.gd',
  'amazon.gent',
  'amazon.hockey',
  'amazon.international',
  'amazon.jobs',
  'amazon.kiwi',
  'amazon.ltda',
  'amazon.press',
  'amazon.re',
  'amazon.salon',
  'amazon.shoophing',
  'amazon.soccer',
  'amazon.tickets',
  'amazon.tienda',
  'amazon.tours',
  'amazon.training',
  'amazon.tv',
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

export const corp_dotcoms = [].concat( 
  audible_dotcoms,
  abe_dotcoms,
  comixology_dotcoms,
  aboutamazon_dotcoms,
  [
    'amazon.work', 
    'amazon.science',
    'amazon.care',
    'amazon.jobs',

    'amazonvideo.com',
    'primevideo.com',

    // https://static-na.payments-amazon.com/OffAmazonPayments/us/sandbox/js/Widgets.js

    'amazon-adsystem.com',
    'amazon-cornerstone.com',
    'amazontrust.com',

    'assoc-amazon.fr',
    'assoc-amazon.net',
    'assoc-amazon.ca',
    'assoc-amazon.co.uk',
    'assoc-amazon.com',
    'assoc-amazon.com.au',
    'assoc-amazon.cn',
    'assoc-amazon.de',
    'assoc-amazon.es',
    'assoc-amazon.fr',
    'assoc-amazon.it',

    'amzn.to',
    'twitch.tv', 

    // mode
    'zappos.com',
    'eastdane.com',
    '6pm.com',
    'shopbop.com', 

    // shop
    'woot.com', 
    'fabric.com', 
    'pillpack.com',
    'wholefoodsmarket.com', 
    'wholefoodsmarket.co.uk',

    // book
    'goodreads.com', 
    'bookfinder.com',
    'librarything.com',
    'bookdepository.com',

    // AWS
    'createspace.com',
    'cloudendure.com',
    'elasticbeanstalk.com',
    'awsstatic.com',
    
    // press
    'washingtonpost.com',
    'imdb.com', 
    'boxofficemojo.com',
    'dpreview.com', 

    // tools
    'mturk.com', 
    'eero.com',
    'ring.com',
    'alexa.com', 'amazonalexa.com',
    'acx.com',
    'lexcycle.com', 
    
    // megalo
    'blueorigin.com',
    'bezosexpeditions.com', 
    'bezosdayonefund.org', 
    'bezosfamilyfoundation.org', 
    'blinkforhome.com', 'blinkforhome.co.uk', 'blinkforhome.de', 
    '10000yearclock.net',
    'seattlespheres.com',

    // payments
    'amazonpay.in',
    'payments-amazon.com', 
    'amazonpayments.com',

    // other
    'withoutabox.com', 
    'sqrrl.com',
    'fillz.com',
  ]
);

export const corp_cdn_dotcoms = [
  'media-amazon.com', 
  'twitchcdn.net',
  'cloudfront.net',
  'amazonaws.com',
  'images-amazon.com',
  'ssl-images-amazon.com',
  'aiv-cdn.net',
  'aiv-delivery.net',
  'media-imdb.com'
];

export const amazon = amazon_dotcoms.concat(corp_dotcoms);

export function formatDotcoms(array) {
  let newArray = [];
  for (let i = 0, lg = array.length; i<lg; i++) {
    newArray.push('*://*.'+array[i]+'/*');
  }
  return newArray;
}