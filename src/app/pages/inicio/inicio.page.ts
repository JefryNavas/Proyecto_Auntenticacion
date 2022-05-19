import { Component, HostListener, OnInit, ViewChild, DoCheck } from '@angular/core';
import { Card } from './card.blueprint';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements DoCheck {
  @HostListener('window:hashchange', ['$event'])
  hashChangeHandler(e) {
    window.location.hash = "dontgoback";
  }
  usuario: any
  constructor(private router: Router,) {
    
  }
  ngDoCheck(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario'))  
    this.card = new Card({
      buttons: ['Leer más'],
      icons: ['favorite', 'share'],
      imageUrl: 'https://www.infragistics.com/angular-demos-lob/assets/images/card/media/ny.jpg',
      subtitle: `${this.usuario.ciudad}, ${this.usuario.direccion}`,
      title: `${this.usuario.nombres} ${this.usuario.apellidos}, ${this.usuario.edad}`
    });
    this.usuario.nacimiento = this.usuario.nacimiento.slice(0, -14);
  }
  public card;
  logout() {
    localStorage.clear();
    this.router.navigate(['login'])
  }
}
