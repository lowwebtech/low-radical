import { getTLDs } from '../tlds'

export const microsoft = [
  {
    name: 'Microsoft',
    domains: [...getTLDs('microsoft')],
  },
  {
    name: 'Bing',
    domains: ['bing.com'],
  },
  {
    name: 'Outlook',
    domains: ['hotmail.com', 'outlook.com', 'live.com'],
  },
  {
    name: 'Office',
    domains: ['office.com'],
  },
  {
    name: 'Linkedin',
    domains: ['linkedin.com'],
  },
  {
    name: 'Skype',
    domains: ['skype.com'],
  },
  {
    name: 'Github',
    domains: ['github.com'],
  },
  {
    name: 'MSN',
    domains: ['msn.com'],
  },
  {
    name: 'Minecraft',
    domains: ['minecraft.com'],
  },
  {
    name: 'Others',
    domains: ['yammer.com','xbox.com',],
  },
]

export const corpCdnDotcoms = ['lpsnmedia.net', 'liveperson.net']

/**
 * Microsoft
 * Bing
 * Office
 * Outlook / Hotmail / Live
 * Xbox
 * Github
 * Linkedin
 * Skype
 * Minecraft
 * Others
 */

/**
 * TODO blocks trackers and all files
 * target.microsoft.com
 * ads.bing.com
 * adserver.bing.com
 * bat.bing.com
 * analytics.live.com
 * measure.office.com
 * ads.linkedin.com
 * analytics.pointdrive.linkedin.com
 * px.ads.linkedin.com
 * r.msn.com
 * ads.msn.com
 * arc1.msn.com
 * ads1.msn.com
 * popup.msn.com
 * rmads.msn.com
 * ads.eu.msn.com
 */
