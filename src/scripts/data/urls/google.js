import { getTLDs } from '../tlds'

export const google = [
  {
    name: 'Google',
    domains: [...getTLDs('google')],
  },
  {
    name: 'Youtube',
    domains: ['youtube.com', 'youtu.be'],
  },
  {
    name: 'Gmail',
    domains: ['gmail.com', 'mail.google.com'],
  },
  {
    name: 'Docs',
    domains: ['docs.google.com'],
  },
  {
    name: 'Maps',
    domains: ['maps.google.com'],
  },
  {
    name: 'Blogger',
    domains: ['blogger.com', 'googleblog.com'],
  },
  {
    name: 'Android',
    domains: ['android.com'],
  },
  {
    name: 'Alphabet',
    domains: [
      'wing.com',
      'waymo.com',
      'x.company',
      'verily.com',
      'sidewalklabs.com',
      'gv.com',
      'fitbit.com',
      'deepmind.com',
      'calicolabs.com',
      'capitalg.com',
    ],
  },
  {
    name: 'Others',
    domains: [
      'google-analytics.com',
      'googleapis.com',
      'admob.com',
      'feedburner.com',
      'firebase.com',
      'tensorflow.org',
      'waze.com',

      'google-analytics.com',
      'googleadservices.com',
      'googleanalytics.com',
      'googlesyndication.com',
      'googletagmanager.com',
      'googletagservices.com',
    ],
  },
]

export const corpCdnDotcoms = ['googleusercontent.com', 'gstatic.com']

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
