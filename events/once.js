const EventEmitter = require('events');
const { emit } = require('process');
const emitter = new EventEmitter();

emitter.once("date", (date) => {
    console.log("Année : %d", date.getFullYear());
});

emitter.emit("date", new Date("2018-03-01")); // Année : 2018
emitter.emit("date", new Date("1983-03-24")); // aucune réponse