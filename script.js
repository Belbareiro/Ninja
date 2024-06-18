class Ninja {
    constructor(nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log(`Nombre del Ninja: ${this.nombre}`);
    }

    showStats() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Salud: ${this.salud}`);
        console.log(`Velocidad: ${this.velocidad}`);
        console.log(`Fuerza: ${this.fuerza}`);
    }

    drinkSake() {
        this.salud += 10;
        console.log(`${this.nombre} ha bebido sake y ahora tiene ${this.salud} de salud.`);
    }
}



