import { getTLDs } from "../tlds";

export const facebookDotcoms = getTLDs('facebook');

export const instagramDotcoms = ["instagram.com"];
export const whatsappDotcoms = ["whatsapp.com"];

export const corpDotcoms = [].concat(instagramDotcoms, whatsappDotcoms, [
  "fb.com",
  "oculus.com",
  "messenger.com",
  "crowdtangle.com",
]);

export const corpCdnDotcoms = ["fbcdn.net", "cdninstagram.com", "whatsapp.net"];

export const facebook = facebookDotcoms.concat(corpDotcoms);
