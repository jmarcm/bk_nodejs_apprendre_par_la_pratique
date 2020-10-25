const { debuglog } = require("util");
const { cpus } = require("os");

// création d'un débogueur nommé nodebook
const debug = debuglog("nodebook");
const infos = cpus().map((cpu) => cpu.model);

// ce message s'affiche systématiquement lors de l'exécution du script
console.log("Cet ordinateur a %d CPU.", infos.length);

// pour afficher ce message
// il faut préciser dans la console : NODE_DEBUG=nodebook node debulog.js
// NODEBOOK 58750: Le modèle du CPU est Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz.
debug("Le modèle du CPU est %s.", infos[0]);

/**
 * Si l'on souhaite plusieurs débogeurs on sépare leur nom par des virgules.
 */
