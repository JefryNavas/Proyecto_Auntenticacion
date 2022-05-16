import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {  IgxDialogComponent, IgxStepperComponent, RadioGroupAlignment } from 'igniteui-angular';
import { name_ciudades } from './ciudades';
import { ConsultasService } from '../services/consultas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  

  public alignment = RadioGroupAlignment.vertical;
  public items = [{id: 1,nombre: 'Masculino'},{id:2 ,nombre: 'Femenino'}];
  public items2 = name_ciudades
  

  public date = new Date();
  @ViewChild('stepper', { static: true })
  public stepper: IgxStepperComponent;

  @ViewChild('alert', { static: true })
  public alert: IgxDialogComponent;

  @ViewChild('alert2', { static: true })
  public alert2: IgxDialogComponent;

  datosPersonalesForm: FormGroup;
  informacionImportanteForm: FormGroup;
  datosDeRegistroForm: FormGroup;
  metodoDeAuntenticacionForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private consultaService: ConsultasService,
    private router: Router) {}

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
      movil: ['', [Validators.required]],
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
    });

  }
  submit(){
    let body = {
      apellidos: this.datosPersonalesForm.value.apellidos,
      nombres: this.datosPersonalesForm.value.nombres,
      cedula: this.datosPersonalesForm.value.cedula,
      edad: this.datosPersonalesForm.value.edad,
      genero: this.datosPersonalesForm.value.genero,
      fecha: this.informacionImportanteForm.value.fecha,
      email: this.informacionImportanteForm.value.email,
      movil: this.informacionImportanteForm.value.movil,
      ciudad: this.informacionImportanteForm.value.ciudad,
      direccion: this.informacionImportanteForm.value.direccion,
      usuario: this.datosDeRegistroForm.value.usuario,
      password: this.datosDeRegistroForm.value.password,
      madre: this.datosDeRegistroForm.value.madre,
      mascota: this.datosDeRegistroForm.value.mascota,
      fruta: this.datosDeRegistroForm.value.fruta,
      tipo_letra: this.metodoDeAuntenticacionForm.value.eleccion1,
    }
    this.consultaService.registrarUsuario(body).subscribe((data:any)=>{
      if (data.estado) {
        this.alert.open();
      }else{
        this.alert2.close();
      }
    })

  }

  reset(){
    this.datosPersonalesForm.reset()
    this.informacionImportanteForm.reset()
    this.datosDeRegistroForm.reset()
    this.metodoDeAuntenticacionForm.reset()
    this.stepper.reset()
  }
  close(){
    this.router.navigate(['/login'])
  }
  errorClose(){
    this.alert2.close();
  }
}