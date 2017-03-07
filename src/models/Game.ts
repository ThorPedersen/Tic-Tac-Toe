import { player } from '../models/Player';
import { board } from '../models/Board';

import { AlertController } from 'ionic-angular';

class game {

    board:board;
    player1:player;
    player2:player;
    playerTurn:boolean = true;
    counter:number = 0;
    winningCoordinates:string;
    winner:string;
    winningcondition:boolean = true;
    winningbackground:number;
    backgroundcolor:string = "red";

    constructor(player1:string, player2:string, private alertCtrl: AlertController)
    {     
        this.player1 = new player(player1, 0, "X");
        this.player2 = new player(player2, 0, "O");
        this.board = new board();
    }
    setPlayerName(playerName1:string, playerName2:string)
    {
        this.player1 = new player(playerName1, 0, "X");
        this.player2 = new player(playerName2, 0, "O");
    }
    SwitchPlayer()
    {
        this.playerTurn = !this.playerTurn;
    }
    addingCharacter(x:number, y:number)
    {
        console.log(this.winningcondition);
        if(this.winningcondition == true)
        {
            let character:string = this.playerTurn ? this.player1.character : this.player2.character;
            if(this.board.addCharacter(x, y, character)) {
                this.SwitchPlayer();
                this.counter++;
                if(this.counter == 9)
                {
                    this.Tie();
                    this.winningcondition = false;
                }
            };
        }
    }
    ClearBoard()
    {
        this.board.clear();
        this.winningcondition = false;
        this.counter = 0;
    }
    Check()
    {
        if(this.board.tiles[0][0] == this.board.tiles[0][1] && this.board.tiles[0][1] == this.board.tiles[0][2] && this.board.tiles[0][0] != null){
            this.winningbackground = 1;
            this.winningCoordinates = "0,0 + 0,1 + 0,2";

            return true;
        }
        if(this.board.tiles[1][0] == this.board.tiles[1][1] && this.board.tiles[1][1] == this.board.tiles[1][2] && this.board.tiles[1][0] != null){
            this.winningbackground = 2;
            this.winningCoordinates = "1,0 + 1,1 + 1,2";
            return true;
        }
        if(this.board.tiles[2][0] == this.board.tiles[2][1] && this.board.tiles[2][1] == this.board.tiles[2][2] && this.board.tiles[2][0] != null){
            this.winningbackground = 3;
            this.winningCoordinates = "2,0 + 2,1 + 2,2";
            return true;
        }


        if(this.board.tiles[0][0] == this.board.tiles[1][0] && this.board.tiles[1][0] == this.board.tiles[2][0] && this.board.tiles[0][0] != null){
            this.winningbackground = 6;
            this.winningCoordinates = "0,0 + 1,0 + 2,0";
            return true;
        }
        if(this.board.tiles[0][1] == this.board.tiles[1][1] && this.board.tiles[1][1] == this.board.tiles[2][1] && this.board.tiles[0][1] != null){
            this.winningbackground = 5;
            this.winningCoordinates = "0,1 + 1,1 + 2,1";
            return true;
        }
        if(this.board.tiles[0][2] == this.board.tiles[1][2] && this.board.tiles[1][2] == this.board.tiles[2][2] && this.board.tiles[0][2] != null){
            this.winningbackground = 4;
            this.winningCoordinates = "0,2 + 1,2 + 2,2";
            return true;
        }


        if(this.board.tiles[0][0] == this.board.tiles[1][1] && this.board.tiles[1][1] == this.board.tiles[2][2] && this.board.tiles[0][0] != null){
            this.winningbackground = 7;
            this.winningCoordinates = "0,0 + 1,1 + 2,2";

            return true;
        }
        if(this.board.tiles[2][0] == this.board.tiles[1][1] && this.board.tiles[1][1] == this.board.tiles[0][2] && this.board.tiles[2][0] != null){
            this.winningbackground = 8;
            this.winningCoordinates = "2,0 + 1,1 + 0,2";
            return true;
        }
        return false;

    }
    FindWinner()
    {    
        if(this.winningcondition == true)
        {
            if(this.playerTurn)
            {
                this.player2.UpdateScore(1);
                this.Congratulations(this.player2.name);
                this.congratulationsSecondWay(this.player2.name);
            }
            else
            {
                this.player1.UpdateScore(1);
                this.Congratulations(this.player1.name);  
                this.congratulationsSecondWay(this.player1.name);       
            }
            this.winningcondition = false;
        }
    }
    congratulationsSecondWay(name:string)
    {
        this.winner = name + " won last round";
    }
    Congratulations(name:string) {
        let prompt = this.alertCtrl.create({
          message: name + " won on coordinates: " + this.winningCoordinates
        });
      prompt.present();
      this.winningCoordinates = "";
    }
    Tie()
    {
        let prompt = this.alertCtrl.create({
          message: "Game is a tie"
      });
      prompt.present();
    }

    Reset()
    {
        this.player1.UpdateScore();
        this.player2.UpdateScore();
        this.ClearBoard();
        this.winningcondition = true;
        this.counter = 0;
    }
    New()
    {
        this.ClearBoard();
        this.winningcondition = true;
        this.counter = 0;
    }
}

export { game }