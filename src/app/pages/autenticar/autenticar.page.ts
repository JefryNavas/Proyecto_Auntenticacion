import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxDialogComponent } from 'igniteui-angular';

@Component({
  selector: 'app-autenticar',
  templateUrl: './autenticar.page.html',
  styleUrls: ['./autenticar.page.scss'],
})
export class AutenticarPage implements OnInit {

  @ViewChild('alert', { static: true })
  public alert: IgxDialogComponent;

  usuario: any

  constructor() { }
  data = []
  seleccionado = []
  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario'))

    this.data = [
      {id: 1, codigo: 'assets/img/rock.png',tipo:2},
      {id: 2, codigo: 'assets/img/paper.png',tipo:2},
      {id: 3, codigo: 'https://i.ibb.co/GRyfNS0/pp.jpg',tipo:3},
      {id: 4, codigo: 'assets/img/scissors.png',tipo:2},
      {id: 5, codigo: '#0000FF',tipo:1},
      {id: 6, codigo: 'https://i.ibb.co/cYWL6bh/Aguacate.jpg',tipo:2},
      {id: 7, codigo: 'assets/img/scissors.png'},
      {id: 8, codigo: 'assets/img/scissors.png'},
      {id: 9, codigo: 'assets/img/scissors.png'},
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
