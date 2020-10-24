/**
 * Crée un répertoire dans un dossier temporaire
 * copie un fichier sous un autre nom
 * liste le contenu du répertoire une fois la copie effectuée.
 */

const {tmpdir} = require("os");
const {join} = require("path");
const fs = require("fs");

// crée le nom du fichier
const dest_dir = join(tmpdir(), "test");

// crée le repertoire
fs.mkdir(dest_dir, (error) => {

    const dest = join(dest_dir, 'example-copy.js');

    // copie le contenu du script
    fs.copyFile(__filename, dest, (error) => {
        if (error == null) {
            console.log(`La copie vers ${dest} s'est bien passée`);
        }
    })
});

/**
 * Il manque la gestion des erreurs.
 * Il y a aussi une imbrication des fonctions de rappel : il faudrait mieux
 * utiliser promisify
 */