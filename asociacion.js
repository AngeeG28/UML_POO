class Motor{

    constructor(tipo, cilindrada){
        this.tipo = tipo;
        this.cilindrada = cilindrada;
    }

    iniciar(){
        console.log(`Motor ${this.tipo} de ${this.cilindrada}cc, encendido`);
    }

    detener(){
        console.log(`Motor ${this.tipo}, apagado`);
    }
}


class Carro {
    constructor(color, marca, modelo, numPuertas, motor){
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.numPuertas = numPuertas;
        // asociacion de la clase motor
        this.motor = motor;
    }

    //Metodo para mostrar los detalles del carro, incluyendo los del motor

    mostrarDetalles(){
        console.log(`carro ${this.marca} ${this.modelo}, Color ${this.color}, Numero de puertas ${this.numPuertas}`);

        console.log(`Motor: ${this.motor.tipo} ${this.motor.cilindrada} cc`);
    }

    arrancar(){
        this.motor.iniciar();
        console.log(`El carro ${this.marca} ${this.modelo} ha arrancado`);
        }
    
    detener(){
        this.motor.detener();
        console.log(`El carro ${this.marca} ${this.modelo} se ha detenido`);
    }   
}


//Instanciando las clases llamando las clases

const motorcarro = new Motor('Gasolina', 1100);

const micarro = new Carro('Rojo', 'Renault', '4', 3, motorcarro);

//Uso de los métodos para interactuar con el carro y su motor
micarro.mostrarDetalles();  //Salida: Carro Renault 4, Color Rojo, Número de puertas: 3,
                            // Motor: Gasolina 1100 cc
micarro.arrancar();     // Salida: Motoro Gasolina 1100 cc encendido.
                        // El carro Renault 4 ha arrancado.
micarro.detener();      // Salida: Motor Gasolina apagado.
                        // El carro Renault 4 se ha detenido.