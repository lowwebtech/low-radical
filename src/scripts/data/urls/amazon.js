import { getTLDs } from "../tlds";

export const amazon = {
  id: "amazon",
  name: "Amazon",
  subgroups: [
    {
      id: "amazon_com",
      name: "Amazon.com",
      domains: [
        ...getTLDs("www.amazon"),

        'amazon',

        "amazon.work",
        "amazon.science",
        "amazon.care",
        "amazon.jobs",

        "amzn.to",

        "aboutamazon.eu",
        "aboutamazon.com",
        "aboutamazon.co.uk",
        "aboutamazon.it",
        "aboutamazon.com",
        "aboutamazon.fr",
        "aboutamazon.in",
        "aboutamazon.de",

        // https://static-na.payments-amazon.com/OffAmazonPayments/us/sandbox/js/Widgets.js

        "amazon-adsystem.com",
        "amazon-cornerstone.com",
        "amazontrust.com",

        "assoc-amazon.fr",
        "assoc-amazon.net",
        "assoc-amazon.ca",
        "assoc-amazon.co.uk",
        "assoc-amazon.com",
        "assoc-amazon.com.au",
        "assoc-amazon.cn",
        "assoc-amazon.de",
        "assoc-amazon.es",
        "assoc-amazon.fr",
        "assoc-amazon.it",

        "amazon-affiliate.eu",
        "partenaires.amazon.fr",

        // payments
        "amazonpay.in",
        "payments-amazon.com",
        "amazonpayments.com",
      ],
    },
    {
      id: "twitch",
      name: "Twitch",
      domains: ["twitch.tv"],
    },
    {
      id: "amazon_prime",
      name: "Prime video",
      domains: ["amazonvideo.com", "primevideo.com"],
    },
    {
      id: "washington_post",
      name: "Washington Post",
      domains: ["washingtonpost.com"],
    },
    {
      id: "aws",
      name: "AWS",
      domains: [
        "aws.amazon.com",
        "createspace.com",
        "cloudendure.com",
        "elasticbeanstalk.com",
        "awsstatic.com",
      ],
    },
    {
      id: "audible",
      name: "Audible",
      domains: [
        "audible.com",
        "audible.ca",
        "audible.co.uk",
        "audible.de",
        "audible.fr",
        "audible.it",
        "audible.com.au",
        "audible.in",
        "audible.co.jp",
      ],
    },
    {
      id: "amazon_books",
      name: "Books",
      domains: [
        "abebooks.com",
        "abebooks.co.uk",
        "abebooks.de",
        "abebooks.fr",
        "abebooks.it",
        "iberlibro.com",
        "zvab.com",

        "comixology.com",
        "comixology.eu",
        "comixology.fr",
        "comixology.co.uk",

        "goodreads.com",
        "bookfinder.com",
        "librarything.com",
        "bookdepository.com",
      ],
    },
    {
      id: "amazon_shops",
      name: "Shops (zappos, wholefoods...)",
      domains: [
        // mode
        "zappos.com",
        "eastdane.com",
        "6pm.com",
        "shopbop.com",

        // shop
        "woot.com",
        "fabric.com",
        "pillpack.com",
        "wholefoodsmarket.com",
        "wholefoodsmarket.co.uk",
      ],
    },
    {
      id: "amazon_imdb",
      name: "IMDb",
      domains: ["imdb.com", "boxofficemojo.com"],
    },
    {
      id: "amazon_megalo",
      name: "Megalomania (blueorigin, day one foundation...)",
      domains: [
        "blueorigin.com",
        "bezosexpeditions.com",
        "bezosdayonefund.org",
        "bezosfamilyfoundation.org",
        "blinkforhome.com",
        "blinkforhome.co.uk",
        "blinkforhome.de",
        "10000yearclock.net",
        "seattlespheres.com",

        "amazonfutureengineer.com",
        "amazonfutureengineer.co.uk",
        "amazonfutureengineer.fr",
      ],
    },
    {
      id: "amazon_others",
      name: "Others (alexa, mturk...)",
      domains: [
        // tools
        "mturk.com",
        "eero.com",
        "ring.com",
        "alexa.com",
        "amazonalexa.com",
        "acx.com",
        "lexcycle.com",

        // other
        "withoutabox.com",
        "sqrrl.com",
        "fillz.com",
        "dpreview.com",
      ],
    },
  ],
};

export const corpCdnDotcoms = [
  "media-amazon.com",
  "twitchcdn.net",
  "cloudfront.net",
  "amazonaws.com",
  "images-amazon.com",
  "ssl-images-amazon.com",
  "aiv-cdn.net",
  "aiv-delivery.net",
  "media-imdb.com",
];

/**
 * Amazon
 * Twitch
 * Audible
 * Bookstores (Adebook, Comixology...)
 * IMDB
 * Washington Post
 * AWS
 * Wholefood's Market
 * Others
 */

/**
 * TODO blocks tracker and all files
 * amazon-adsystem.com
 * assoc-amazon.com
 * mobileanalytics.us-east-1.amazonaws.com
 * alexa-sitestats.s3.amazonaws.com
 */
