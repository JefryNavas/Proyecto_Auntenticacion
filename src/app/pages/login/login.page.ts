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
export class LoginPage implements OnInit, DoCheck {
  form: FormGroup;
  @ViewChild('alert', { static: true })
  public alert: IgxDialogComponent;
  mensaje=''
  constructor(
    private _formBuilder: FormBuilder,
    private consultaService: ConsultasService,
    private router: Router) {
  }
  ngDoCheck(): void {
    if (JSON.parse(localStorage.getItem('intentos'))) {
      this.mensaje='Superaste los intentos permitidos'
      this.alert.open()
      localStorage.clear();
    }
  }
  ngOnInit() {
    this.form = this._formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],

    });
  }

  login() {
    let usuario = this.form.value
    this.consultaService.getUsuarios().subscribe((data: []) => {
      let user = data.find((user: any) => user.usuario === usuario.usuario && user.password === usuario.password)
      if (!user) {
        this.mensaje='Usuario o Contraseña inválidos'
        this.alert.open()
        return
      }
      localStorage.setItem('usuario', JSON.stringify(user))
      this.router.navigate(['/autenticar'])
    })

  }
  close() {
    this.alert.close();

  }
}
