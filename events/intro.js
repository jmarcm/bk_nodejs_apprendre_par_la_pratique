const EventEmitter = require('events');

// création d'un gestionnaire dévénements
const emitter = new EventEmitter();

// enregistrement d'une fonction d'écoute
// elle sera exécutée à chaque émission de l'objet date
emitter.on("myDate", (date) => {
    console.log("Année : %d", date.getFullYear());
});

// émission d'un événement date avec comme argument un objet date.
emitter.emit("myDate", new Date("2018-03-01")); // Année : 2018
emitter.emit("myDate", new Date("1983-03-24")); // Année : 1983