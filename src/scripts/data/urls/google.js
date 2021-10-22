import { getTLDs } from "../tlds";

export const googleDotcoms = getTLDs('google');

export const youtubeDotcoms = ["youtube.com", "youtu.be"];

export const alphabetDotcoms = [
  "wing.com",
  "waymo.com",
  "x.company",
  "verily.com",
  "sidewalklabs.com",
  "gv.com",
  "fitbit.com",
  "deepmind.com",
  "calicolabs.com",
  "capitalg.com",
];

export const corpDotcoms = [].concat(youtubeDotcoms, alphabetDotcoms, [
  "gmail.com",
  "g.co",

  "googleblog.com",
  "google-analytics.com",
  "googleapis.com",
  "admob.com",
  "blogger.com",
  "feedburner.com",
  "firebase.com",
  "tensorflow.org",
  "android.com",
  "waze.com",
]);

export const corpCdnDotcoms = ["googleusercontent.com", "gstatic.com"];

export const google = googleDotcoms.concat(corpDotcoms);
