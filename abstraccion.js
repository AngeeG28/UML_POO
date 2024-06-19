class figuraGeometrica{
    constructor(color){
        this.color = color;
    }

    calcularArea(){
        throw new Error("Metodo abstracto 'CalcularArea' debe ser implementado");
    }
}
class Rectangulo extends figuraGeometrica{
    constructor(color, base, altura){
        super(color);
        this.base = base;
        this.altura = altura;     
    }
    calcularArea(){
        return this.base * this.altura;
    }
}

class Circulo extends figuraGeometrica{

    constructor(color, radio){
        super(color);
        this.radio = radio;
    }

    calcularArea(){
        return Math.PI * this.radio * this.radio;
    }
}

const rectangulo = new Rectangulo('amarillo', 5, 10);
const circulo = new Circulo('morado', 7);
console.log(`Área del rectángulo ${rectangulo.color}: ${rectangulo.calcularArea()}`);
console.log(`Área del círculo ${circulo.color}: ${circulo.calcularArea()}`);