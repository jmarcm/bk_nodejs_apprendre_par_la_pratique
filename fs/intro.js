const fs = require("fs");
const path = require("path");
const filename = path.join(__dirname, "package.json");

fs.readFile(filename, (error, content) => {
    console.log(String(content));
});