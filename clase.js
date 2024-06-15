class Carro{
    constructor(marca, modelo){ //Inicializar las variables dentro de la clase
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadActual = 0;
    }

    arrancar(){
        console.log(`${this.marca} ${this.modelo} ha arrancado`);
    }

    detener(){
        this.velocidadActual = 0;
        console.log(`${this.marca} ${this.modelo} se ha detenido`);
    }

    acelerar(velocidad){
        this.velocidadActual +=velocidad;
        console.log(`${this.marca} ${this.modelo} ha acelerado a ${this.velocidadActual} Km/h`)
    }

    frenar(velocidad){
        this.velocidadActual -=velocidad;
        if(this.velocidadActual < 0){
            this.velocidadActual = 0
        }
        console.log(`${this.marca} ${this.modelo} ha frenado a ${this.velocidadActual} Km/h`);
    }
}
let miCarro = new Carro('Toyota', 'Corolla');

miCarro.arrancar();
miCarro.acelerar(100);
miCarro.frenar(30);
miCarro.detener();