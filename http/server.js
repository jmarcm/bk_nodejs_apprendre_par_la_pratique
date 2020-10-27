const http = require("http");
const server = http.createServer();

// Ouverture de l’acceptation des connexions réseau sur le port 4000, uniquement sur la boucle locale (localhost)
// une erreur sera affichée si ce port réseau est déjà pris par un autre processus.
server.listen(4000, "localhost");

server.on("listening", () => {
    console.log("Serveur démarré");
});

// quand une requête arrive affiche l'url demandée par le client
server.on("request", (request, response) => {
    const { method, url } = request;
    console.log("URL demandée : %s %s", method, url);

    // termine la connexion avec le client
    response.end("Coucou");
});
