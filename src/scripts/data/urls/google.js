import { getTLDs } from "../tlds";

export const google = {
  id: "google",
  name: "Google",
  subgroups: [
    {
      id: "google_com",
      name: "Google.com",
      domains: [...getTLDs("www.google")],
    },
    {
      id: "youtube",
      name: "Youtube",
      domains: ["youtube.com", "youtu.be"],
    },
    {
      id: "google_mail",
      name: "Gmail",
      domains: ["gmail.com", "mail.google.com"],
    },
    {
      id: "google_docs",
      name: "Docs (doc, sheet, slide, form)",
      domains: ["docs.google.com"],
    },
    {
      id: "google_maps",
      name: "Maps",
      domains: ["maps.google.com"],
    },
    {
      id: "blogger",
      name: "Blogger",
      domains: ["blogger.com", "googleblog.com"],
    },
    {
      id: "android",
      name: "Android",
      domains: ["android.com"],
    },
    {
      id: "alphabet",
      name: "Alphabet",
      domains: [
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
      ],
    },
    {
      id: "google_others",
      name: "Others",
      domains: [
        "google-analytics.com",
        "googleapis.com",
        "admob.com",
        "feedburner.com",
        "firebase.com",
        "tensorflow.org",
        "waze.com",

        "google-analytics.com",
        "googleadservices.com",
        "googleanalytics.com",
        "googlesyndication.com",
        "googletagmanager.com",
        "googletagservices.com",
      ],
    },
  ],
};

export const corpCdnDotcoms = ["googleusercontent.com", "gstatic.com"];

/**
 * Google
 * Youtube
 * Gmail
 * Maps
 * Docs (Sheets, Slides, Forms, Docs)
 * Blogger
 * Android
 * Translate
 * Calendar
 * Drive
 * or whitelist
 */

/**
 * TODO block tracker and all files from
 * 
  "google-analytics.com",
  "googleadservices.com",
  "googleanalytics.com",
  "googlesyndication.com",
  "googletagmanager.com",
  "googletagservices.com",
 */
