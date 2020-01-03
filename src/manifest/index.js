const pkg = require('../../package.json');

const manifestInput = {
    manifest_version: 2,
    name: 'No Amazon',
    version: pkg.version,

    icons: {
        '16': 'assets/icons/favicon-16.png',
        '32': 'assets/icons/favicon-32.png',
        '48': 'assets/icons/favicon-48.png',
        '128': 'assets/icons/favicon-128.png',
    },

    description: 'No Fucking Amazon',
    homepage_url: 'https://github.com/lowwebtech/no-amazon',
    short_name: 'NoAmazon',

    permissions: ['tabs', 'storage', 'webRequest', 'webNavigation', 'webRequestBlocking', '<all_urls>'],
    content_security_policy: "script-src 'self' 'unsafe-eval'; object-src 'self'",

    '__chrome|firefox__author': 'lowwebtech',
    __opera__developer: {
        name: 'lowwebtech',
    },

    __firefox__applications: {
        gecko: { id: '{754FB1AD-CC3B-4856-B6A0-7786F8CA9D17}' },
    },

    __chrome__minimum_chrome_version: '49',
    __opera__minimum_opera_version: '36',

    browser_action: {
        default_popup: 'popup.html',
        default_icon: {
            '16': 'assets/icons/favicon-16.png',
            '32': 'assets/icons/favicon-32.png',
            '48': 'assets/icons/favicon-48.png',
            '128': 'assets/icons/favicon-128.png',
        },
        default_title: 'tiny title',
        '__chrome|opera__chrome_style': false,
        __firefox__browser_style: false,
    },

    '__chrome|opera__options_page': 'options.html',

    options_ui: {
        page: 'options.html',
        open_in_tab: true,
        __chrome__chrome_style: false,
    },

    background: {
        scripts: ['js/background.bundle.js'],
        '__chrome|opera__persistent': true,
    },

    content_scripts: [
        {
            matches: ['http://*/*', 'https://*/*'],
            js: ['js/contentScript.bundle.js'],
            run_at: "document_end",
        },
    ],
};

module.exports = manifestInput;
