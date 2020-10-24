const EventEmitter = require("events");
const emitter = new EventEmitter();

const tick = () => process.stdout.write(".");
let counter = 0;

// l'événement date est émis chaque seconde
setInterval(() => {
    counter++;
    emitter.emit("date", new Date());

    if (counter === 5) {
        process.exit(0);
    }
}, 1000);

// la fonction tick est appelé toutes les secondes
// {C'est un enregistrement}
emitter.on("date", tick);

// la fonction tick est débranchée de l'événement date au bout de 3 secondes.
emitter.on("date", () => {
    if (counter === 3) {
        emitter.removeListener("date", tick);
    }
});

/**
 * Il faut pouvoir faire référence à la fonction d'écoute afin de pouvoir
 * la débrancher.
 * Une utilisation alternative consiste à étendre la classe eventEmitter.
 * Une fois étendue, notre nouvelle classe bénéficiera des méthodes .on(), etc.
 */
