const { get } = require("https");
const url = "https://oncletom.io/node.js/package.json";

get(url, (response) => {
    // initialisation de la requête
    // un objet représentant la réponse du serveur est transmis
    // à ce stade le serveur n'a pas encore commencé à renvoyer les données
    response.on("data", (data) => {
        // c'est l'étape où on reçoit des données
        console.log(data.toString());
    });
});
