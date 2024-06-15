class Carro{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
        this.estado = 'fallando';
    }

    mostrarDetalle(){
        console.log(`Marca: ${this.marca}, Modelo ${this.modelo}, Estado: ${this.estado}`);
    }

    cambiarEstado(nuevoEstado){
        this.estado = nuevoEstado;
    }
}

class servicioMecanico{
    reparar(carro){
        console.log(`Reparando el ${carro.marca} ${carro.modelo}`);
        carro.cambiarEstado('reparado');
        console.log(`El ${carro.marca} ${carro.modelo} ha sido revisado y esta ${carro.estado}.`);
    }
}

const miCarro = new Carro('Toyota', 'Hilux');
const taller = new servicioMecanico();
taller.reparar(miCarro);
miCarro.mostrarDetalle(); //Marca: toyota, Modelo: hillux, Estado: reparado