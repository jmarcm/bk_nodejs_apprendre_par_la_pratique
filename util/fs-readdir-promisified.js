/**
 * Je n'ai rien compris !!!
 */
const { promisify } = require("util");

// affecte une version transformée de fs.readdir grâce à util.promisify
const readdir = promisify(require("fs").readdir);

readdir(__dirname) // on ne passe pas de fonction de rappel contrairement à fs.readdir
    // le résultat de la fonction est passé à la résolution de la promesse
    .then((files) => console.log(files))
    .catch((error) => console.error(error.message));
