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

  usuario: any

  constructor(private consultaService: ConsultasService) { }
  data = []
  seleccionado = []
  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario'))

    this.consultaService.getData(JSON.stringify(this.usuario)).subscribe(data=>{
      console.log(data);
    })
    this.data = [
      {id: 1, codigo: 'https://i.ibb.co/G7dgH8b/Aceituna.jpg',tipo:2},
      {id: 2, codigo: 'https://i.ibb.co/Kjx6tCZ/serpiente.jpg',tipo:2},
      {id: 3, codigo: 'https://i.ibb.co/6Y32hjf/loro.png',tipo:3},
      {id: 4, codigo: 'https://i.ibb.co/wM6VQZB/yoyomo.jpg',tipo:2},
      {id: 5, codigo: '#0000FF',tipo:1},
      {id: 6, codigo: 'https://i.ibb.co/cYWL6bh/Aguacate.jpg',tipo:2},
      {id: 7, codigo: '#354685',tipo:1},
      {id: 8, codigo: 'https://i.ibb.co/rcjqcR1/Tamarillo.jpg',tipo:2},
      {id: 9, codigo: '#8D8388',tipo:1},
    ]
  }

  addSeleccionar(dato:any){
    if (this.seleccionado.length===4) {
      console.log('error')
    } else{
      let repetido = this.seleccionado.find(val=> val.id === dato.id)
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
