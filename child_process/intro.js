const { exec } = require("child_process");

exec("npm --version", (error, stdout, stderr) => {
    console.log(`npm version ${stdout.trim()}`);
});
