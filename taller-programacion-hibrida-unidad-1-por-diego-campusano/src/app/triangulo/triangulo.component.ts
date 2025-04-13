import { Component, OnInit } from '@angular/core';
import { IonCard, IonButton, IonCardHeader, IonCardSubtitle, IonCardContent, IonImg, IonInput, IonList, IonItem, IonCardTitle } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { TrianguloEscaleno } from '../classes/classes';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonCardTitle, IonItem, FormsModule, IonList, IonInput, IonImg, IonCardContent, IonCardSubtitle, IonCardHeader, IonCard, IonButton, ]
})

export class TrianguloComponent  implements OnInit {
  LadoAInputStr: string = "" /*Lineas 15, 16, y 17 son variables las cuales guardan los valores de los lados del triangulo entregados mediante Ionic Input*/
  LadoBInputStr: string = ""
  LadoCInputStr: string = ""
  Resultado: string = "" /*Mensaje el cual sera enviado de vuelta al usuario el cual contendra el resultado del calculo del perimetro segun el los lados dados*/

  constructor() { }

  ngOnInit() {}

  CalcularPerimetroTriangulo() { /*Funcion que maneja el calculo del perimetro del triangulo*/
    const ladoA = parseFloat(this.LadoAInputStr) /*Lineas 25, 26, y 27 manejan la conversion de los lados dados a float*/
    const ladoB = parseFloat(this.LadoBInputStr)
    const ladoC = parseFloat(this.LadoCInputStr)
    const triangulo = new TrianguloEscaleno(ladoA, ladoB, ladoC) /*Crea una nueva instancia de la clase TrianguloEscaleno especificada en ../classes/classes.ts dando como parametro los
    lados dados por el usuario*/
    const perimetro = triangulo.calcularPerimetro().toFixed(2) /*Crea constante perimetro la cual tendra como valor el resultado de la funcion calcularPerimetro de nuestra instancia
     de TrianguloEscaleno. Tambien formatea el resultado para que contenga un maximo de 2 decimales*/
    this.Resultado = `El perímetro de este triángulo es: ${perimetro} cm` /*Mensaje con el valor del perimetro el cual sera mandado a la template*/
    }

}
