import { Component } from '@angular/core';
import { IonItem, IonSelect, IonSelectOption, IonCard, IonCardContent, SelectChangeEventDetail } from '@ionic/angular/standalone';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { IonSelectCustomEvent } from '@ionic/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCardContent, IonCard, IonItem, IonSelect, IonSelectOption, TrianguloComponent, CirculoComponent, CommonModule],
})

export class HomePage {
  TipoFigura: string = "" /*Guarda el tipo de figura*/

  constructor() {}

  SelectCirculo() { return this.TipoFigura == "Círculo"} /*Funcion la cual sirve como condicion para ngIf de la llamada a la template de Circulo*/ 
  SelectTriangulo() { return this.TipoFigura == "Triángulo"} /*Funcion la cual sirve como condicion para ngIf de la llamada a la template Triangulo*/

  CambioFigura($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) { /*Funcion que recibe el valor del evento del cambio de seleccion de figura*/ 
    this.TipoFigura = $event.detail.value /*Cambia el valor de TipoFigura segun el valor del evento, el cual corresponde con la figura seleccionada*/
    console.log($event.detail.value) /*Imprime en consola el valor del evento para debugging*/
  }
}
