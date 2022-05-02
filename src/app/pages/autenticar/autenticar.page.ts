import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-autenticar',
  templateUrl: './autenticar.page.html',
  styleUrls: ['./autenticar.page.scss'],
})
export class AutenticarPage implements OnInit {

  result: string;
  pointsUser = 0;
  pointsComp = 0;

  constructor(private playGame: GameService) { }
  data = []
  ngOnInit(): void {
    this.data = [
      {id: 1, codigo: 'assets/img/rock.png',tipo:2},
      {id: 2, codigo: 'assets/img/paper.png',tipo:2},
      {id: 3, codigo: 'https://i.ibb.co/GRyfNS0/pp.jpg',tipo:3},
      {id: 4, codigo: 'assets/img/scissors.png',tipo:2},
      {id: 5, codigo: '#0000FF',tipo:1},
      {id: 6, codigo: 'assets/img/scissors.png'},
      {id: 7, codigo: 'assets/img/scissors.png'},
      {id: 8, codigo: 'assets/img/scissors.png'},
      {id: 9, codigo: 'assets/img/scissors.png'},
    ]
    this.result = 'Esperando jugada...';
    console.log(this.pointsUser);
  }

  play(choice: string): void {
    const result = this.playGame.game(choice);
    console.log(result);
    this.result = result.message;
    this.pointsUser += result.userAdd;
    this.pointsComp += result.compAdd;
  }

}
