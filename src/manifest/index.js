const pkg = require("../../package.json");

const manifestInput = {
  __chrome__manifest_version: 3,
  __firefox__manifest_version: 2,
  name: "__MSG_extensionName__",
  version: pkg.version,
  default_locale: "en_US",
  icons: {
    16: "assets/icons/favicon-16.png",
    32: "assets/icons/favicon-32.png",
    48: "assets/icons/favicon-48.png",
    128: "assets/icons/favicon-128.png",
  },

  description: "__MSG_extensionDescription__",
  homepage_url: "https://github.com/lowwebtech/low-radical",
  short_name: "low-radical",
  author: "lowwebtech",

  __opera__developer: {
    name: "lowwebtech",
  },

  __chrome__host_permissions: ["*://*/*"],

  __chrome__web_accessible_resources: [
    {
      resources: ["assets/*"],
      matches: ["*://*/*"],
    },
  ],
  __firefox__web_accessible_resources: ["assets/*"],

  __chrome__permissions: [
    "tabs",
    "storage",
    "declarativeNetRequest",
    // "*://*.amazon.com/*",
  ],

  __firefox__permissions: [
    "tabs",
    "storage",
    "webRequest",
    "webRequestBlocking",
    "webNavigation",
    "<all_urls>",
  ],

  __chrome__declarative_net_request: {
    rule_resources: [
      // {
      //   id: 'ruleset_amazon',
      //   enabled: true,
      //   path: 'rules/amazon.json',
      // },
      // {
      //   id: 'ruleset_facebook',
      //   enabled: true,
      //   path: 'rules/facebook.json',
      // },
      // {
      //   id: 'ruleset_1',
      //   enabled: true,
      //   path: 'rules/rules.json',
      // },
    ],
  },

  __chrome__action: {
    default_popup: "popup.html",
    default_icon: {
      16: "assets/icons/favicon-16.png",
      32: "assets/icons/favicon-32.png",
      48: "assets/icons/favicon-48.png",
      128: "assets/icons/favicon-128.png",
    },
    default_title: "low-radical",
  },
  __firefox__browser_action: {
    default_popup: "popup.html",
    default_icon: {
      16: "assets/icons/favicon-16.png",
      32: "assets/icons/favicon-32.png",
      48: "assets/icons/favicon-48.png",
      128: "assets/icons/favicon-128.png",
    },
    default_title: "low-radical",
  },

  __chrome__options_page: "options.html",

  options_ui: {
    page: "options.html",
    open_in_tab: true,
  },

  __chrome__background: {
    service_worker: "js/background.bundle.js",
  },
  __firefox__background: {
    scripts: ["js/background.bundle.js"],
  },

  // content_security_policy: "script-src 'self' 'unsafe-eval'; object-src 'self'",
  // __firefox__applications: {
  //   gecko: {
  //     id: '754fb1ad-cc3b-4856-b6a0-7786f8ca9d17',
  //   },
  // },
};

module.exports = manifestInput;
