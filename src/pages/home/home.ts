import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { game } from '../../models/Game';
import { GamePage } from '../game/game';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  gamepage = GamePage;

  public Game:game;
  public playerOneName:string;
  public playerTwoName:string;

  constructor(public navCtrl: NavController) {

  }

  //Navigates to gamepage, while taking names from ion inputs and puts them into parameters
  StartGame() {
    console.log(this.playerOneName, this.playerTwoName);
    this.navCtrl.push(GamePage, {
      Player1Name: this.playerOneName, player2Name: this.playerTwoName
    });
  }
}