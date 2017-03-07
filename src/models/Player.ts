class player
{
    name:string;
    score:number;
    character:string;

    constructor(name:string, score:number, character:string)
    {
        this.name = name;
        this.score = score;
        this.character = character;
    }
    UpdateScore(score:number = null)
    {
        if(score)
        {
            this.score += score;
        }
        else
        {
            this.score = 0;
        }
    }
}

export { player }