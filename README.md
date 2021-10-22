# low-radical

This extension blocks all websites from GAFAM or downgrades them (grayscale color, removes buy button, blocks unnecessary assets). Websites owned by GAFAM are also blocked (eg: Audible, Twitch for Amazon).

Firefox : https://addons.mozilla.org/firefox/addon/no-amazon/
Chrome : https://chrome.google.com/webstore/detail/low-radical/biaoiacajmgmfnjdgpcclnebfbbfccll


## Build

- `git clone git@github.com:lowwebtech/low-radical.git`
- `npm install`
- watch task:  `npm run dev` (all) / `npm run dev:chrome` / `npm run dev:firefox` / `npm run dev:opera`
- build task: `npm run build` (all) / `npm run build:chrome` / `npm run build:firefox` / `npm run build:opera`


## TODO

- blocks GAFAM trackers
- add more websites
- detect use of Microsoft Azure or Google Cloud servers
- anti dark-pattern
- add exceptions (eg: whitelist github for Microsoft, or youtube for Google)
- suggest alternatives to GAFAM


## Main websites blocked

### Google
  - google.*
  - *.google
  - youtube.com
  - google-analytics.com
  - blogger.com
  - and more, see [complete list of Google websites blocked](https://github.com/lowwebtech/low-radical/blob/master/src/scripts/data/urls/google.js)

### Amazon
  - amazon.*
  - *.amazon
  - audible.*
  - abebooks.com
  - primevideo.com
  - twitch.tv
  - wholefoodsmarket.com
  - imdb.com
  - blueorigin.com
  - washingtonpost.com
  - and more, see [complete list of Amazon websites blocked](https://github.com/lowwebtech/low-radical/blob/master/src/scripts/data/urls/amazon.js)

### Facebook
  - facebook.*
  - *.facebook
  - instagram.com
  - whatsapp.com
  - messenger.com
  - and more, see [complete list of Facebook websites blocked](https://github.com/lowwebtech/low-radical/blob/master/src/scripts/data/urls/facebook.js)

### Apple
  - apple.*
  - *.apple
  - beatsbydre.com
  - and more, see [complete list of Apple websites blocked](https://github.com/lowwebtech/low-radical/blob/master/src/scripts/data/urls/apple.js)

### Microsoft
  - microsoft.*
  - *.microsoft
  - bing.com
  - xbox.com
  - github.com
  - linkedin.com
  - skype.com
  - msn.com
  - and more, see [complete list of Microsoft websites blocked](https://github.com/lowwebtech/low-radical/blob/master/src/scripts/data/urls/microsoft.js)



## Licence

Code released under the [GNU GPLv3 License](LICENSE).
