const http = require("http");

const server = http.createServer();
server.listen(4000, "localhost");

server.on("listening", () => {
    console.log("Serveur démarré");
});

// quand une requête arrive affiche l'url demandée par le client
server.on("request", (request, response) => {
    const content_type = "text/html; charset=utf-8";
    response.setHeader("Content-Type", content_type);

    response.write("<h1>Salut à toi</h1>");
    response.end();
});
