import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonItem, IonLabel, IonInput, IonButton, IonCard, IonCardHeader } from '@ionic/angular';   
import { IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { DecimalPipe } from '@angular/common';





@Component({
  selector: 'app-triangulo',
  standalone: true,
  imports: [ReactiveFormsModule,
    CommonModule,
    DecimalPipe,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonGrid, IonRow, IonCol,
    IonItem, IonLabel, IonInput, IonButton],
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  
})

export class TrianguloComponent {
  private fb = inject(FormBuilder);

  trianguloForm!: FormGroup;
  perimetro: number | null = null;
  mensajeError: string | null = null;

  constructor() {
    this.trianguloForm = this.fb.group({
      ladoA: [null, [Validators.required, Validators.min(0.0001)]],
      ladoB: [null, [Validators.required, Validators.min(0.0001)]],
      ladoC: [null, [Validators.required, Validators.min(0.0001)]],
    });
  }

  calcularPerimetro(): void {
    this.mensajeError = null;
    this.perimetro = null;

    if (this.trianguloForm.invalid) {
      this.mensajeError = 'Todos los lados son obligatorios.';
      return;
    }

    const { ladoA, ladoB, ladoC } = this.trianguloForm.value;
    this.perimetro = ladoA + ladoB + ladoC;
    }

    
        
  }
 
  
