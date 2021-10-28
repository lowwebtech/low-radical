import { getTLDs } from "../tlds";

export const microsoftDotcoms = getTLDs("microsoft");

export const corpDotcoms = [].concat([
  "bing.com",
  "live.com",
  "hotmail.com",
  "outlook.com",
  "office.com",
  "github.com",
  "linkedin.com",
  "xbox.com",
  "skype.com",
  "msn.com",
  "minecraft.com",
  "yammer.com",
  "microsoftonline.com",
]);

export const corpCdnDotcoms = ["lpsnmedia.net", "liveperson.net"];

export const microsoft = microsoftDotcoms.concat(corpDotcoms);

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