# low-radical

This extension just blocks or downgrades websites of Amazon (and being added other GAFAM). 

Firefox : https://addons.mozilla.org/firefox/addon/no-amazon/
Chrome : https://chrome.google.com/webstore/detail/low-radical/biaoiacajmgmfnjdgpcclnebfbbfccll


## Why ?

Amazon is the first GAFAM services that low-radical aims to boycott. Why? Here are some explainations:

- Amazon is largely powered by fossil fuels, more than any other big tech company.
- Amazon exploits workers, fights unions and fights tax laws that would support local economies.
- Amazon creates catastrophic packaging waste and destroys millions of unsold items to free spaces in its warehouses.
- Amazon is creating a huge monopoly on online commerce and the infrastructure for selling on the internet
- Amazon tracks, creates, optimizes, analyzes all our needs to make us consume as much as possible at the lowest price whatever the consequences, especially for employment (1 Amazon job destroys 2-3 jobs) 


## How ?

To fight Amazon, you have to attack its business and its business is online commerce and the sale of AWS infrastructure.

So the extension lets you choose between:
- hard mode : completely block Amazon websites (a fallback will appear)
- soft mode : block the ability to buy on Amazon websites, by removing the add to cart or purchase buttons, as well as the Basket, Account, Checkout... pages.

The content therefore remains visible in soft mode, it is just downgraded:
- grayscale filter is applied over all website
- blocks unnecessary files of type: font, media (video / sound), iframe and object for all Amazon websites
- and therefore no possibility to buy on Amazon

The extension also attempts to limit the use of AWS servers:
- display of a "AWS" badge (inside topbar icon) on websites using AWS servers.
- block unnecessary files from Amazon CDNs



## Licence

Code released under the [GNU GPLv3 License](LICENSE).
