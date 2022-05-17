## 0.3.0
- updates to webextension manifest V3 (chrome) and maintain compatibility to V2 (firefox)
    - use new API declarativeNetRequest to block request (previously webRequest and webRequestBlocking)
    - update manifest : action, host_permissions, web_accessible_ressources
- remove unnecessary files

## 0.2.0
- New UI by @kuroneko_io thanks !
- New blacklist/whitelist by subgroups / services
- remove mode "degrade"
- remove AWS detection

## 0.1.2
- update README
- blocks GAFAM by country TLDs (eg: google.fr|de|co.jp|...)
- blocks websites from GAFAM tld (eg: *.google)

## 0.1.1
- fix extension build : comment zip

## 0.1.0

- block GAFAM website
- remove manifest content_security_policy
- fix firefox "eval" error during development

## 0.0.8

- simplify background init
- test webextension update

## 0.0.7
## 0.0.6

- fix issue with injected css styles to hide "Buy" buttons
- add amazonfutureengineer.com

## 0.0.5

- remove functionality for changing Jeff Bezos's name -> no content_script.js anymore
- testing, linting and releasing CLI
- new amazon urls

## 0.0.4

- disable replacement of "Jeff Bezos"
- fix background_script launch at startup
- remove webNavigation permission

## 0.0.3

- optional replacement of "Jeff Bezos"
- optional detection of AWS servers
- new Amazon domains : amazon.care, zappos.com, pillpack.com, eero.com, sqrrl.com, eastdane.com, 6pm.com, bookdepository.com, acx.com, createspace.com
- remove webNavigation permission

## 0.0.2

- mode hard : block all amazon websites
- mode soft : block purchase and downgrade all amazon websites
- basic css rules to hide "Buy" buttons and prices
- options page : mode hard/soft, display AWS websites, change Jeff Bezos name
- popup
- npm updates

## 0.0.1

- block amazon dotcoms 
- downgrade others websites owned by amazon