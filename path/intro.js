const path = require("path");
// peut être remplacé par
// import { dirname, basename, extname } from "path";

const filename = ("/tmp/package.json");

// affiche /tmp
console.log(path.dirname(filename));

// affiche package.json
console.log(path.basename(filename));

// affiche .json
console.log(path.extname(filename));