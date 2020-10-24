const {readdir} = require("fs");

readdir(".", (error, files) => console.log(files));

// le point . -> répertoire courant
// 2 points .. -> répertoire parent