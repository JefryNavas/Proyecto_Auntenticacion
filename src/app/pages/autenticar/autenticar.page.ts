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
      {id: 1, img: 'assets/img/rock.png'},
      {id: 2, img: 'assets/img/paper.png'},
      {id: 3, img: 'assets/img/scissors.png'},
      {id: 4, img: 'assets/img/scissors.png'},
      {id: 5, img: 'assets/img/scissors.png'},
      {id: 6, img: 'assets/img/scissors.png'},
      {id: 7, img: 'assets/img/scissors.png'},
      {id: 8, img: 'assets/img/scissors.png'},
      {id: 9, img: 'assets/img/scissors.png'},
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
