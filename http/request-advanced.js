const https = require("https");
const { parse } = require("url");

const url = parse("https://oncletom.io/node.js/package.json");

const request = https.request({ ...url, method: "HEAD" });
console.log(request);
