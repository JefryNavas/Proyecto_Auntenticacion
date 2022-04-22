import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-registrar',
  templateUrl: 'registrar.page.html',
  styleUrls: ['registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  datosPersonalesForm: FormGroup;
  informacionImportanteForm: FormGroup;
  datosDeRegistroForm: FormGroup;
  metodoDeAuntenticacionForm: FormGroup;
  selected = 'none';
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debe ingresar un valor';
    }

    return this.email.hasError('email') ? 'Email No Válido' : '';
  }

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.datosPersonalesForm = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.informacionImportanteForm = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.datosDeRegistroForm = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
    this.metodoDeAuntenticacionForm = this._formBuilder.group({

    });
    
  }
  datosPersonalesSubmit(){
    console.log(this.datosPersonalesForm.value)
  }
  informacionImportanteSubmit(){
    console.log(this.informacionImportanteForm.value)
  }
  datosDeRegistroSubmit(){
    console.log(this.datosDeRegistroForm.value)
  }
  metodoDeAuntenticacionSubmit(){
    console.log(this.metodoDeAuntenticacionForm.value)
  }

}
