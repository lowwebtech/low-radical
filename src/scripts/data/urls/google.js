import { getTLDs } from "../tlds";

export const google = {
  id: "google",
  name: "Google",
  subgroups: [
    {
      id: "google_com",
      name: "Google.com",
      domains: [...getTLDs("www.google"), "google"],
    },
    {
      id: "youtube",
      name: "Youtube",
      domains: ["youtube.com", "youtu.be", "tv.youtube.com"],
    },
    {
      id: "google_mail",
      name: "Gmail",
      domains: ["gmail.com", "mail.google.com", "chat.google.com"],
    },
    {
      id: "google_docs",
      name: "Docs (doc, sheet, slide, form)",
      domains: [
        "docs.google.com",
        "google.com/forms",
        "google.com/sheets",
        "google.com/slides",
        "google.com/docs",
      ],
    },
    {
      id: "google_maps",
      name: "Maps (Earth, drive, waze...)",
      domains: [
        "maps.google.com",
        "google.com/earth",
        "google.com/drive",
        "google.com/streetview",
        "waze.com",
      ],
    },
    {
      id: "blogger",
      name: "Blogger",
      domains: ["blogger.com", "googleblog.com"],
    },
    {
      id: "android",
      name: "Android",
      domains: [
        "android.com",
        "play.google.com",
        "wearos.google.com",
        "store.google.com",
      ],
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
 * TODO block tracker and all files from
 * 
  "google-analytics.com",
  "googleadservices.com",
  "googleanalytics.com",
  "googlesyndication.com",
  "googletagmanager.com",
  "googletagservices.com",
 */

/**
 * https://news.google.com/
 * https://www.google.com/calendar/about/
 * https://assistant.google.com/business/
 * https://www.google.com/chrome/
 * https://chrome.google.com/webstore/category/apps
 * https://www.google.com/chromebook/
 */

/*
news / https://news.google.com/
calendar / https://www.google.com/calendar/about/
assistant_drawer / https://assistant.google.com/business/
chrome / https://www.google.com/chrome/
chromebooks / https://www.google.com/chromebook/
drawings / https://chrome.google.com/webstore/detail/google-drawings/mkaakpdehdafacodkgkpghoibnmamcme?hl=en-US
google_alerts / https://www.google.com/alerts
google_arts_and_culture / https://artsandculture.google.com/?utm_medium=referral&amp;utm_source=about.google
google_cast / https://www.google.com/cast/
google_chat / https://gsuite./chat/
google_classroom / https://classroom.google.com/
google_cloud_print / https://www.google.com/cloudprint/learn/index.html
duo / https://duo.google.com
google_expeditions / https://www.google.co.in/edu/expeditions/
google_express / https://www.google.com/express/
project_fi / https://fi.google.com/about/
finance / https://www.google.com/finance
google_flights / https://www.google.com/flights
google_fonts / https://www.google.com/fonts
groups / https://groups.google.com
google_meet / https://gsuite./meet/
google_one / https://one.google.com
google_input_tools / https://www.google.com/inputtools/
google_pay / https://pay.google.com/about/
google_play_movies_and_tv / https://support.google.com/googleplay/answer/4512465
scholar / https://scholar.google.com/intl/en-US/scholar/about.html
google-shopping / https://shopping.google.com/u/0/
google-tv / https://tv.google/
hangouts / https://support.google.com/hangouts/answer/2944865
keep / https://www.google.com/keep/
messenger / https://messages.google.com/
photos / https://www.google.com/photos/about
play-protect / https://www.android.com/intl/fr_fr/play-protect/
podcasts / https://podcasts.google.com/
search / https://www.google.com/search/about/
sites / https://sites.google.com/new
stadia / https://stadia.google.com/
tilt_brush / https://www.tiltbrush.com/
translate / https://translate.google.com/about
google-travel / https://www.google.com/travel/
voice / https://voice.google.com/                  
*/
