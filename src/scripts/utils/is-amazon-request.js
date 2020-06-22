export default function(details) {
  const headers = details.responseHeaders;
  const matches = [
    ['x-amz-cf-pop', -1],
    ['x-amz-cf-id', -1],
    ['x-amz-request-id', -1],
    ['x-amz-id', -1],
    ['x-amz-id-2', -1],
    ['x-amz-meta-s3cmd-attrs', -1],
    ['vary', '-amzn-'],
    ['via', 'cloudfront'],
    ['x-cache', 'cloudfront'],
    ['server', 'amazon'],
    ['server', 'amazons3'],
  ];
  
  let isAmazon = false;
  for (let i = 0, lg = headers.length; i<lg; i++) {
    for (let j = 0, lgj = matches.length; j<lgj; j++) {
      if (headers[i].name.toLowerCase() === matches[j][0]) {
        if (headers[i].value.toLowerCase().indexOf(matches[j][1]) !== -1 || matches[j][1] === -1) {
          return true;
        }
      } 
    }
  }
  return false;
}