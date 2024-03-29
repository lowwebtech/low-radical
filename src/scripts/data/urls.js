import { getLocalParams } from "../data/params";
import { all } from "../data/datas";

export async function getDotComs() {
  return getLocalParams().then(
    (local) => {
      const dotcoms = [];
      all.forEach((group) => {
        // test if group is active (local param = true)
        if (local[group.id] === true) {
          group.subgroups.forEach((subgroup) => {
            // test if SUBgroup is active (local param = true)
            if (local[subgroup.id] === true) {
              dotcoms.push(subgroup.domains);
            }
          });
        }
      });

      return dotcoms.flat();
    },
    (error) => {
      console.log(error);
    }
  );
}

export function formatDotcoms(array) {
  const newArray = [];
  for (let i = 0, lg = array.length; i < lg; i++) {
    newArray.push("*://*." + array[i] + "/*");
  }
  return newArray;
}

export function parseURL(url) {
  const parser = document.createElement("a");
  const searchObject = {};

  let split;
  let i;
  // Let the browser do the work
  parser.href = url;
  // Convert query string to object
  const queries = parser.search.replace(/^\?/, "").split("&");
  for (i = 0; i < queries.length; i++) {
    split = queries[i].split("=");
    searchObject[split[0]] = split[1];
  }
  return {
    protocol: parser.protocol,
    host: parser.host,
    hostname: parser.hostname,
    port: parser.port,
    pathname: parser.pathname,
    search: parser.search,
    searchObject,
    hash: parser.hash,
  };
}
