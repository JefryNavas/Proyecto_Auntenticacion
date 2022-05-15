import { Component, OnInit } from '@angular/core';
import { Card } from './card.blueprint';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuario: any
  constructor() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'))
    console.log(this.usuario)
  }
  public card;
  ngOnInit() {
    this.card = new Card({
      buttons: ['Leer más'],
      icons: ['favorite', 'share'],
      imageUrl: 'https://www.infragistics.com/angular-demos-lob/assets/images/card/media/ny.jpg',
      subtitle: `${this.usuario.ciudad}, ${this.usuario.direccion}`,
      title: `${this.usuario.nombres} ${this.usuario.apellidos}, ${this.usuario.edad}`
    });
  }

}
