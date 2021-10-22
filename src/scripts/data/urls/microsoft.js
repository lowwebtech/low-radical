import { getTLDs } from "../tlds";

export const microsoftDotcoms = getTLDs('microsoft');

export const corpDotcoms = [].concat([
  "bing.com",
  "live.com",
  "xbox.com",
  "office.com",
  "github.com",
  "linkedin.com",
  "skype.com",
  "msn.com",
  "minecraft.com",
  "hotmail.com",
  "yammer.com",
  "microsoftonline.com",
]);

export const corpCdnDotcoms = ["lpsnmedia.net", "liveperson.net"];

export const microsoft = microsoftDotcoms.concat(corpDotcoms);
