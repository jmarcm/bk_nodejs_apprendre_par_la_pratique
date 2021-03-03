/**
 * Ce programme va exécuter ls (sur mac ou linux)
 *
 */

const { exec } = require("child_process");

exec("dir .", { cwd: "/" }, (error, stdout, stderr) => {
    console.log(error);
    console.log(stdout);
    console.log(stderr);
});
