class board
{
    public tiles:string[][];
    public Characters:number;

    constructor()
    {
        this.clear();
    }

    //Checks to see if the specific tile in the board array has a character in it.
    Occupied(x:number, y:number)
    {
        if(this.tiles[x][y] == null){
            return false;
        }
        return true;
    }

    //Adds a character in a specific tile, and increments character number
    addCharacter(x:number, y:number, character:string)
    {
        if(!this.Occupied(x,y)) {
            this.tiles[x][y] = character;
            this.Characters++;
            return true;
        }
        return false;
    }

    //Clears the board array, and resets characters number
    clear()
    {
        this.tiles = [];
        for(var i: number = 0; i < 3; i++) {
            this.tiles[i] = [];
            for(var j: number = 0; j < 3; j++)
            {
                this.tiles[i][j] = null;
            }
        }
        this.Characters = 0;
    }

    //fetches the specific character in the board array
    GetCharacter(x:number, y:number)
    {
        return this.tiles[x][y];
    }
}

export { board }