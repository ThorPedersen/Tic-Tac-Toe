import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { game } from '../../models/Game';

/*
  Generated class for the Game page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {

  public Game:game;
  public PlayerOneName:string;
  public PlayerTwoName:string;

  constructor(public navCtrl: NavController, private alertCtrl:AlertController, public params:NavParams) {
    this.PlayerOneName = params.get("Player1Name");
    this.PlayerTwoName = params.get("player2Name");

    this.Game = new game(this.PlayerOneName, this.PlayerTwoName, alertCtrl);
  }

  //Cell click method for adding characters. Calls the game instance.
  public CellClick(x,y)
  {          
    this.Game.addingCharacter(x,y);
    
    if(this.Game.Check()) {
      this.Game.FindWinner();
    }
  }

  //Reset method. Resets board and score.
  public ResetGame()
  {          
      this.Game.Reset();
        
  }

  //New game method. Resets board.
  public NewGame()
  {
      this.Game.New();
  }
}
