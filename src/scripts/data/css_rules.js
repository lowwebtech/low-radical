import {
  amazonDotcoms,
  abeDotcoms,
  audibleDotcoms,
  comixologyDotcoms,
} from "./urls/amazon";

export const cssRules = [
  {
    urls: amazonDotcoms,
    css: `
      #buybox,
      #nav-link-accountList,
      #nav-orders,
      #nav-cart,
      #price,
      #price-block,
      #submit.add-to-cart,
      #buyNow_feature_div,
      .masrw-buy-box,
      .nav-signin-tt
    `,
  },
  {
    urls: abeDotcoms,
    css: `
      .pricing-info, 
      .result-pricing, 
      #bookPurchase,
      .price
      `,
  },
  {
    urls: audibleDotcoms,
    css: "#adbl-prospect-buy-box",
  },
  {
    urls: comixologyDotcoms,
    css: `
      .detail-content .item-actions-container, 
      .bundle-list .item-actions-container,
      .top-navigation .shopping_cart_frame,
      .slider-list aside
      `,
  },
  {
    urls: ["goodreads.com"],
    css: `
      .buyButtonBar #buyButton,
      .buyButtonBar #buyDropButtonStores,
    `,
  },
  {
    urls: ["imdb.com"],
    css: `
      .buybox
    `,
  },
  {
    urls: ["ring.com"],
    css: `
      #AddToCart-rvd-smore_template,
      .product-price__price,
      header .cart_link
    `,
  },
  {
    urls: ["fabric.com"],
    css: `
      div[data-qa="add-to-cart"],
      div[data-qa="tier-based-pricing"],
      div[data-qa="design-wall"],
      fabric-navigation-account,
      fabric-navigation-cart
    `,
  },
];

function parseCSSRules(rules) {
  const dict = {};
  for (let i = 0, lg = cssRules.length; i < lg; i++) {
    const cssRule = cssRules[i];
    for (let j = 0, lg = cssRule.urls.length; j < lg; j++) {
      const url = cssRule.urls[j];
      if (!dict[url]) {
        dict[url] = cssRule.css;
      }
    }
  }
  return dict;
}

const formatedCssRules = parseCSSRules(cssRules);

export function getDegradedCSS(website) {
  if (formatedCssRules[website]) {
    return formatedCssRules[website] + "{ display:none!important; }";
  } else {
    return "";
  }
}
