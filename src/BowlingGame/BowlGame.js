class Game{
    constructor(){
        this.score = 0;
    }

    roll(pins){
        this.score = this.score + pins;
    }
    Score(){
        return this.score;
    }
}

module.exports = Game;
