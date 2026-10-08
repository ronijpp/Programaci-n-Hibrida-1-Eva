import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonSelectOption, IonSelect } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, 
    IonToolbar, IonTitle, 
    IonContent, IonItem, 
    IonLabel, IonSelectOption, 
    IonSelect, FormsModule, 
    CommonModule, CirculoComponent, 
    TrianguloComponent],
})
export class HomePage { figuraSeleccionada: string | null = null;
  
  interfaceOptions= {
    header: 'Figura Geometrica',
    translucent: true,

  };

  constructor() {}

  onFiguraSeleccionada() {
    console.log('Figura seleccionada:', this.figuraSeleccionada);
  }
}
