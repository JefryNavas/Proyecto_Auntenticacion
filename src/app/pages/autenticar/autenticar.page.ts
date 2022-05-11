import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxDialogComponent } from 'igniteui-angular';
import { ConsultasService } from '../services/consultas.service';

@Component({
  selector: 'app-autenticar',
  templateUrl: './autenticar.page.html',
  styleUrls: ['./autenticar.page.scss'],
})
export class AutenticarPage implements OnInit {

  @ViewChild('alert', { static: true })
  public alert: IgxDialogComponent;
  data = []
  seleccionado = []
  usuario: any
  pista:string

  constructor(private consultaService: ConsultasService) {
    this.usuario = JSON.parse(localStorage.getItem('usuario'))

   }

  ngOnInit(): void {
    this.consultaService.getData(JSON.stringify(this.usuario)).subscribe((datos:any)=>{
      this.data = datos.resultado
      console.log(this.data)
      this.pista = datos.pista
    })
  }

  addSeleccionar(dato:any){
    if (this.seleccionado.length===4) {
      //Validar que todos los seleccionados el estado sea true
    } else{
      let repetido = this.seleccionado.find(val=> val.auntenticar === dato.auntenticar)
      if (!repetido) {
        this.seleccionado.push(dato)
      }else{
        this.alert.open()
      }
    }
   

  }
  deleteSeleccionar(){
    this.seleccionado.pop();
  }
  close(){
    this.alert.close();
  }
}
