const { get } = require("https");
let count = 0;

get("https://oncletom.io/node.js/index.html", (response) => {
    response.on("data", (data) => {
        count++;
        const ko = data.length / 1024;
        // affiche de message à chaque paquet reçu
        console.log("Morceau #%d : %iko", count, ko);
    });

    // se déclenche lorsque la requête n'a plus de données à recevoir
    response.on("end", () => {
        console.log("fini (%d morceaux)", count);
    });
});
