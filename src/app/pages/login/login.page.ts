import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IgxDialogComponent } from 'igniteui-angular';
import { ConsultasService } from '../services/consultas.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit,DoCheck {
  form: FormGroup;
  @ViewChild('alert', { static: true })
  public alert: IgxDialogComponent;
  @ViewChild('alert2', { static: true })
  public alert2: IgxDialogComponent;
  constructor(
    private _formBuilder: FormBuilder,
    private consultaService: ConsultasService,
    private router: Router) {
      
     }
  ngDoCheck(): void {
    if (JSON.parse(localStorage.getItem('intentos'))) {
      this.alert2.open()
      localStorage.clear();
    }
  }
  ngOnInit() {
    this.form = this._formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],

    });
  }

  login(){
    let usuario = this.form.value
    this.consultaService.getUsuarios().subscribe((data:[])=>{
      let user = data.find((user:any) =>user.usuario === usuario.usuario && user.password === usuario.password)
      if (!user) {
        this.alert.open()
        return
      }
      localStorage.setItem('usuario',JSON.stringify(user))
      this.router.navigate(['/autenticar'])
    })
    
  }
  close(){
    this.alert.close();
    this.alert2.close();
  }
  deshabilitaRetroceso(){
    window.location.hash="no-back-button";
    window.location.hash="Again-No-back-button" //chrome
    window.onhashchange=function(){window.location.hash="";}
}
}
