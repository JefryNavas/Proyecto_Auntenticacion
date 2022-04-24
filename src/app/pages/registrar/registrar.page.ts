import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  IgxStepperComponent, RadioGroupAlignment } from 'igniteui-angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  public alignment = RadioGroupAlignment.vertical;
  public items: string[] = ['Maculino', 'Femenino'];

  public date = new Date();
  @ViewChild('stepper', { static: true })
  public stepper: IgxStepperComponent;

  datosPersonalesForm: FormGroup;
  informacionImportanteForm: FormGroup;
  datosDeRegistroForm: FormGroup;
  metodoDeAuntenticacionForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.datosPersonalesForm = this._formBuilder.group({
      apellidos: ['', Validators.required],
      nombres: ['', Validators.required],
      cedula: ['', Validators.required],
      edad: ['', Validators.required],
      genero: ['', Validators.required],
    });
    this.informacionImportanteForm = this._formBuilder.group({
      fecha: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
    });
    this.datosDeRegistroForm = this._formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
      madre: ['', Validators.required],
      mascota: ['', Validators.required],
      fruta: ['', Validators.required],
    });
    this.metodoDeAuntenticacionForm = this._formBuilder.group({
      eleccion1: ['', Validators.required],
      eleccion2: ['', Validators.required],
    });
    
  }
  submit(){
    console.log(this.datosPersonalesForm.value)
    console.log(this.informacionImportanteForm.value)
    console.log(this.datosDeRegistroForm.value)
    console.log(this.metodoDeAuntenticacionForm.value)
  }

  reset(){
    
    this.datosPersonalesForm.reset()
    this.informacionImportanteForm.reset()
    this.datosDeRegistroForm.reset()
    this.metodoDeAuntenticacionForm.reset()
    this.stepper.reset()
  }
}