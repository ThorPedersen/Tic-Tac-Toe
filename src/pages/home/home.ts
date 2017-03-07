import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, private alertCtrl:AlertController) {

  }
  StartGame() {
    console.log(this.playerOneName, this.playerTwoName);
    this.navCtrl.push(GamePage, {
      Player1Name: this.playerOneName, player2Name: this.playerTwoName
    });
  }
}