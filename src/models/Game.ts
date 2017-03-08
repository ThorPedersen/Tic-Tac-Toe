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

    //Creates a game with 2 players
    constructor(player1:string, player2:string, private alertCtrl: AlertController)
    {     
        this.player1 = new player(player1, 0, "X");
        this.player2 = new player(player2, 0, "O");
        this.board = new board();
    }

    //Switches player turns by alternating between a true false boolean
    SwitchPlayer()
    {
        this.playerTurn = !this.playerTurn;
    }

    //Adds a character to the board
    addingCharacter(x:number, y:number)
    {
        //if the winnincondition is false then the board is locked to adding more characters.
        if(this.winningcondition == true)
        {
            //Checks for player turn
            let character:string = this.playerTurn ? this.player1.character : this.player2.character;
            if(this.board.addCharacter(x, y, character)) {
                this.SwitchPlayer();
                this.counter++;

                //If the board has 9 characters in it, and the Check method to see if there are 3 characters in a row is false
                //then the board is full and the game will be a tie         
                if(this.counter == 9)
                {
                    if(this.Check() == false)
                    {
                        this.Tie();
                        this.winningcondition = false;
                    }
                }
            };
        }
    }

    //Clears board, resets counter and winning condition
    ClearBoard()
    {
        this.board.clear();
        this.winningcondition = false;
        this.counter = 0;
    }

    //Checks 3 tiles in a row, to see if there are 3 of the same characters in them.
    //Also changes winningbackground number to change the line overlay of the winning row.
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

    //Looks for a winner
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

    //Unused second method to demonstrate who won last round
    congratulationsSecondWay(name:string)
    {
        this.winner = name + " won last round";
    }

    //Promt method that pops up who won and on what coordinates
    Congratulations(name:string) {
        let prompt = this.alertCtrl.create({
          message: name + " won! "
        });
      prompt.present();
      this.winningCoordinates = "";
    }

    //Prompt method that indicates if the game is a tie
    Tie()
    {
        let prompt = this.alertCtrl.create({
          message: "Game is a tie"
      });
      prompt.present();
    }

    //Reset method, that resets player scores, clears board, counter and winning condition
    Reset()
    {
        this.player1.UpdateScore();
        this.player2.UpdateScore();
        this.ClearBoard();
        this.winningcondition = true;
        this.counter = 0;
    }

    //New game method, that clears board, counter and winning condition
    New()
    {
        this.ClearBoard();
        this.winningcondition = true;
        this.counter = 0;
    }
}

export { game }