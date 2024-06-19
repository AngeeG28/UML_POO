class Carro{
    //atributos privados

    #color;
    #marca;
    #modelo;
    #numPuertas;

    constructor(color, marca, modelo, numPuertas){
        this.#color = color;
        this.#marca = marca;
        this.#modelo = modelo;
        this.#numPuertas = numPuertas;  
    }

    obtenerColor(){
        return this.#color;
    }

    obtenerMarca(){
        return this.#marca;
    }

    obtenerModelo(){
        return this.#modelo;
    }

    obtenernumPuertas(){
        return this.#numPuertas;
    }

    cambiarColor(color){
        this.#color = color;
    }

    cambiarMarca(marca){
        this.#marca = marca;
    }

    cambiarModelo(modelo){
        this.#modelo = modelo;
    }

    cambiarnumPuertas(numPuertas){
        this.#numPuertas = numPuertas;
    }


    mostrarDetalles(){
        console.log(`Carro ${this.#marca} ${this.#modelo}, Color: ${this.#color}, Número de puertas: ${this.#numPuertas}`);
    }
}

const miCarro = new Carro('Verde', 'Audi', 'zx', 5);
miCarro.mostrarDetalles();