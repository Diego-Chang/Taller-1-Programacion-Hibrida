export abstract class FiguraGeometrica { /*Clase abstracta FiguraGeometrica la funcionara como base para las demas figuras*/
    nombre: string
    constructor (nombre: string) {
        this.nombre = nombre
    }

    abstract calcularPerimetro() : number
}

export class Circulo extends FiguraGeometrica { /*Clase Circulo que hereda de FiguraGeometrica*/
    radio: number /*Variable usada en metodo y que sera recibida mediante Ionic Input. Representa el radio de un circulo*/
    constructor (radio: number){
        super("Circulo")
        this. radio = radio
    }
    override calcularPerimetro(): number { /*Sobreescrive metodo abstracto calcularPerimetro. Calcula el perimetro de un circulo en base a un radio dado*/
        return this.radio * 2 * 3.1416
    }
}

export class TrianguloEscaleno extends FiguraGeometrica { /*Clase TrianguloEscaleno que hereda de FiguraGeometrica*/
    ladoA: number /*Lineas 22, 23, y 24 son variables usadas en metodo y que seran recibidas mediante Ionic Input. Representan los lados de un triangulo*/
    ladoB: number
    ladoC: number

    constructor (ladoA: number, ladoB: number, ladoC: number) {
        super("Triangulo Escaleno")
        this.ladoA = ladoA
        this.ladoB = ladoB
        this.ladoC = ladoC
    }
    override calcularPerimetro(): number { /*Sobreescrive metodo abstracto calcularPerimetro. Calcula el perimetro de un triangulo en base a los lados dados*/
        return this.ladoA + this.ladoB + this.ladoC
    }
}

export class TrianguloEquilatero extends TrianguloEscaleno { /*Clase TrianguloEquilatero que herda de TrianguloEscaleno*/
    constructor (ladoA: number) {
        super(ladoA, ladoA, ladoA)
    }
}

