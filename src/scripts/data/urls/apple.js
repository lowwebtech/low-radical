import { getTLDs } from "../tlds";

export const appleDotcoms = getTLDs("apple");

export const corpDotcoms = [].concat([
  "shazam.com",
  "beatsbydre.com",
  "workflow.is",
  "beddit.com",
]);

export const corpCdnDotcoms = [];

export const apple = appleDotcoms.concat(corpDotcoms);

/**
 * Apple
 * 
 * Shazam
 * Beats by Dre
 */