import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol, IonInput, IonButton } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { IonItem } from "@ionic/angular";

@Component({
  selector: 'app-circulo',
  standalone: true,
  imports: [IonItem, IonInput, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol, IonInput, IonButton, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],

})
export class CirculoComponent  implements OnInit {
  perimetro: number | null = null;
  radio: number | null = null;

  circuloForm!: FormGroup;
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.circuloForm = this.fb.group({
      radio: ['', [Validators.required, Validators.min(0)]]
    });
  }

  calcularPerimetro(): void {
      const val = this.circuloForm.get('radio')?.value;
      console.log('Valor ingresado:', val);

      const radioValue = parseFloat(val);
      if (!isNaN(radioValue) && radioValue > 0) {
        this.perimetro = 2 * Math.PI * radioValue;
      } else {
        this.perimetro = null;
      }

    }
  }

