const https = require("https");

// construction des paramètres pour la http.request()
const options = {
    protocol: "https:",
    host: "oncletom.io",
    path: "/node.js/package.json",
    method: "HEAD",
};

const request = https.request(options);

// explicite au serveur distant la nature du contenu que l’on s’apprête à recevoir
request.setHeader("Accept", "application/json");

// déclenche l’envoi de la requête sur le réseau
request.end();

request.on("response", (response) => {
    const lastModified = response.headers["last-modified"];

    // affiche la date de modification de la ressource distante
    console.log("Modifié le %s", lastModified);
});
