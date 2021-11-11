import { getTLDs } from "../tlds";

export const apple = [
  {
    name: 'Apple',
    domains: [...getTLDs('apple')],
  },
  {
    name: 'Others',
    domains: [
      "shazam.com",
      "beatsbydre.com",
      "workflow.is",
      "beddit.com",
    ],
  },
]

export const corpCdnDotcoms = [];

/**
 * Apple
 * 
 * Shazam
 * Beats by Dre
 */

/**
 * blocks trackers and all files
 * securemetrics.apple.com
 */