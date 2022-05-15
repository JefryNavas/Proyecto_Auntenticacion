import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { IgxDialogComponent } from 'igniteui-angular';
import { ConsultasService } from '../services/consultas.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';

@Component({
  selector: 'app-autenticar',
  templateUrl: './autenticar.page.html',
  styleUrls: ['./autenticar.page.scss'],
})
export class AutenticarPage implements OnInit {
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  @ViewChild('alert', { static: true })
  public alert: IgxDialogComponent;
  @ViewChild('alert2', { static: true })
  public alert2: IgxDialogComponent;
  mensaje = ''
  data = []
  seleccionado = []
  usuario: any
  pista: string
  cont = 0
  cont2 = 0
  loading = false
  public loadingTemplate!: TemplateRef<any>;

  public config = {
    animationType: ngxLoadingAnimationTypes.none,
    backdropBorderRadius: '3px',
  };

  constructor(private consultaService: ConsultasService) {
    this.usuario = JSON.parse(localStorage.getItem('usuario'))

  }

  ngOnInit(): void {
    this.loading = true
    this.consultaService.getData(JSON.stringify(this.usuario)).subscribe((datos: any) => {
      this.data = datos.resultado
      console.log(this.data)
      this.pista = datos.pista
      this.loading = false
    })
  }

  addSeleccionar(dato: any) {
    if (dato.estado) {
      this.cont = this.cont + 1
    }
    let repetido = this.seleccionado.find(val => val.auntenticar === dato.auntenticar)
    if (!repetido) {
      this.seleccionado.push(dato)
    } else {
      this.mensaje = 'No se puede seleccionar repetidos'
      this.alert.open()
    }
    if (this.seleccionado.length === 4) {
      if (this.cont === 4) {
        this.mensaje = 'Autenticación exitosa'
        this.load()
        return
      } else {
        this.mensaje = 'Error de validación'
        this.load()
        this.cont = 0
        this.seleccionado = []
        return
      }
    }


  }
  load(): void {
    this.loading = true;
    setTimeout(() => {
      this.alert.open()
      this.loading = false
    }, 2000);
  }
  deleteSeleccionar() {
    this.seleccionado.pop();
  }
  close() {
    this.alert.close();
  }
}
