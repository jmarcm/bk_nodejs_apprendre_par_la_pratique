const fs = require("fs");

fs.rmdir(__dirname, (error) => {
    console.log(error);
});