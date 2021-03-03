const { exec } = require("child_process");
const { stdout } = require("process");

// On transmet les variables d’environnement existantes au processus enfant
const env = { PING_COUNT: 1, ...process.env };

const cmd = "ping -c $PING_COUNT oncletom.io";

exec(cmd, { env }, (error, stdout) => {
    return error ? console.error(error) : console.log(stdout);
});
