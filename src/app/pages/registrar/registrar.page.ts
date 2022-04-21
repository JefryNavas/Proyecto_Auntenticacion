import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-registrar',
  templateUrl: 'registrar.page.html',
  styleUrls: ['registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['Datos Personales', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['Información Importante', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['Datos de Registro', Validators.required],
    });
    
  }
  primer(){
    console.log(this.firstFormGroup.value)
  }
  segundo(){
    console.log(this.secondFormGroup.value)
  }
  tercero(){
    console.log(this.thirdFormGroup.value)
  }

}
