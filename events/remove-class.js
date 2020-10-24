const EventEmitter = require("events");
const { start } = require("repl");

// extension de la classe EventEmitter
class Car extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }

    // encapsule un appel à la méthode emit()
    // {disponible grâce à l'extension}
    start() {
        this.emit("action", this, "demarrer");
    }
}

const auto = new Car("Boombo");

auto.on("action", (car, action) => {
    console.log("%s est en train de %s", car.name, action);
});

auto.start();
