class Vehiculo{
    constructor(color, marca, modelo){
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
    }

    arrancar(){
        console.log(`El vehiculo ha arrancado.`);
    }
}

class Carro extends Vehiculo{
    constructor(color, marca, modelo, numPuertas){
        super(color, marca, modelo);
        this.numPuertas = numPuertas;
    }

    abrirPuertas(){
        console.log(`Se han abierto las ${this.numPuertas} puertas del carro.`)
    }
}

const miCarro = new Carro('Blanco', 'Kia', 'Picanto', 5);
console.log(miCarro.color);
miCarro.arrancar();
miCarro.abrirPuertas();