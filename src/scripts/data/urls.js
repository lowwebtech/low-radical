import browser from 'webextension-polyfill'

import { params } from '../data/params'

import { google } from '../data/urls/google'
import { amazon } from '../data/urls/amazon'
import { facebook } from '../data/urls/facebook'
import { apple } from '../data/urls/apple'
import { microsoft } from '../data/urls/microsoft'

export async function getDotComs() {
  return browser.storage.local.get(params).then(
    (result) => {
      const dotcoms = []

      if (result.google) dotcoms.push(getGroupedDotcoms(google))
      if (result.amazon) dotcoms.push(getGroupedDotcoms(amazon))
      if (result.facebook) dotcoms.push(getGroupedDotcoms(facebook))
      if (result.apple) dotcoms.push(getGroupedDotcoms(apple))
      if (result.microsoft) dotcoms.push(getGroupedDotcoms(microsoft))

      return dotcoms.flat()
    },
    (error) => {
      console.log(error)
    },
  )
}

function getGroupedDotcoms(corp) {
  const dotcoms = corp.map((group) => {
    return group.domains
  })
  
  return dotcoms.flat()
}

export function formatDotcoms(array) {
  const newArray = []
  for (let i = 0, lg = array.length; i < lg; i++) {
    newArray.push('*://*.' + array[i] + '/*')
  }
  return newArray
}

export function parseURL(url) {
  var parser = document.createElement('a')
  var searchObject = {}
  var queries
  var split
  var i
  // Let the browser do the work
  parser.href = url
  // Convert query string to object
  queries = parser.search.replace(/^\?/, '').split('&')
  for (i = 0; i < queries.length; i++) {
    split = queries[i].split('=')
    searchObject[split[0]] = split[1]
  }
  return {
    protocol: parser.protocol,
    host: parser.host,
    hostname: parser.hostname,
    port: parser.port,
    pathname: parser.pathname,
    search: parser.search,
    searchObject: searchObject,
    hash: parser.hash,
  }
}
