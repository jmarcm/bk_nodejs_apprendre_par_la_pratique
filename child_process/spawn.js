const { spawn } = require("child_process");

const subprocess = spawn("cat", ["package.json"]);

// Les données retournées par la commande externe se lisent depuis les flux de sortie
subprocess.stdout.on("data", (data) => {
    console.log(String(data));
});
