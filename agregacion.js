class Rueda{
    constructor(tipo, diametro){
        this.tipo = tipo;
        this.diametro = diametro;
    }

    mostrarDetalles(){
        console.log(`Rueda tipo: ${this.tipo}, Diametro de: ${this.diametro}`);
    }
}
class Carro{
    constructor(color, marca, modelo, numPuertas, ruedas){
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.numPuertas = numPuertas;
        //Agregación con la clase Rueda
        this.ruedas = ruedas;
    }

    mostrarDetalles(){
        console.log(`Carro ${this.marca} ${this.modelo}, Color ${this.color}, Numero de puertas ${this.numPuertas}`);

        this.ruedas.forEach((rueda, index) => {
            console.log(`Ruedas ${index +1}: ${rueda.tipo}, Diametro: ${rueda.diametro} pulgadas`);
        });
    }
}

const rueda = new Rueda('Verano', 18);
const ruedaDelanteraIzquierda = new Rueda('Verano', 18);
const ruedaDelanteraDerecha = new Rueda('Verano', 18);
const ruedaTraseraIzquierda = new Rueda('Invierno', 17);
const ruedaTraseraDerecha = new Rueda('Invierno', 17);

// Creamos la instancia de carro con la agregacion de la ruedas

const mi_carro = new Carro('Negro', 'Audi', 'A4', 5, [ruedaDelanteraIzquierda, ruedaDelanteraDerecha, ruedaTraseraIzquierda, ruedaTraseraDerecha]);

mi_carro.mostrarDetalles();