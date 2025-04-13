import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonImg, IonButton, IonItem, IonInput, IonCardTitle, IonCol, IonRow, IonGrid, IonText } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { Circulo } from '../classes/classes';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonText, IonGrid, IonRow, IonCol, IonCardTitle, FormsModule, IonInput, IonItem, IonButton, IonCardSubtitle, IonCard, IonCardHeader, IonCardContent, IonImg]
})

export class CirculoComponent  implements OnInit {
  RadioInputStr: string = "" /*Guarda el radio dado mediante Ionic Input por el usuario*/
  Resultado: string = "" /*Mensaje el cual sera enviado de vuelta al usuario el cual contendra el resultado del calculo del perimetro segun el radio dado*/

  constructor() { }

  ngOnInit() {}
  
  CalcularPerimetroCirculo() { /*Funcion que maneja el calculo del perimetro del circulo*/
    const RadioInput = parseFloat(this.RadioInputStr) /*Convierte el radio dado de string a float para poder realizar el calculo*/
    const circulo = new Circulo(RadioInput) /*Crea una nueva instancia de la clase Circulo especificada en ../classes/classes.ts dando como parametro el radio dado por el usuario*/
    const perimetro = circulo.calcularPerimetro().toFixed(2) /*Crea constante perimetro la cual tendra como valor el resultado de la funcion calcularPerimetro de nuestra instancia
    de Circulo. Tambien formatea este resultado para que contenga un maximo de 2 decimales*/
    this.Resultado = `El perímetro de este círculo es: ${perimetro} cm` /*Mensaje con el valor del perimetro el cual sera mandado a la template*/
    }
}
