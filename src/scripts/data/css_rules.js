import { 
  amazon_dotcoms, 
  abe_dotcoms, 
  audible_dotcoms,
  comixology_dotcoms,
} from './amazon_urls';

const cssRules = [
  {
    urls: amazon_dotcoms,
    css: `
      #buybox,
      #nav-link-accountList,
      #nav-orders,
      #nav-cart,
      #price,
      #price-block,
      .masrw-buy-box
    `
  },
  {
    urls: abe_dotcoms,
    css: `
      .pricing-info, 
      .result-pricing, 
      #bookPurchase,
      .price
      `
  },
  {
    urls: audible_dotcoms,
    css: '#adbl-prospect-buy-box'
  },
  {
    urls: comixology_dotcoms,
    css: `
      .detail-content .item-actions-container, 
      .bundle-list .item-actions-container,
      .top-navigation .shopping_cart_frame,
      .slider-list aside
      `
  },
  {
    urls: ['goodreads.com'],
    css: `
      .buyButtonBar #buyButton,
      .buyButtonBar #buyDropButtonStores,
    `
  },
  {
    urls: ['imdb.com'],
    css: `
      .buybox
    `
  },
  {
    urls: ['ring.com'],
    css: `
      #AddToCart-rvd-smore_template,
      .product-price__price,
      header .cart_link
    `
  },
  {
    urls: ['fabric.com'],
    css: `
      div[data-qa="add-to-cart"],
      div[data-qa="tier-based-pricing"],
      div[data-qa="design-wall"],
      fabric-navigation-account,
      fabric-navigation-cart
    `
  }
];

function parseCSSRules(rules){

  let dict = {};

  for(let i = 0, lg = cssRules.length; i<lg; i++){
    let cssRule = cssRules[i];
    for(let j = 0, lg = cssRule.urls.length; j<lg; j++){
      let url = cssRule.urls[j];
      if( ! dict[url] ){
        dict[url] = cssRule.css;
      }
    }
  }

  return dict;
}

export const formatedCssRules = parseCSSRules(cssRules);
