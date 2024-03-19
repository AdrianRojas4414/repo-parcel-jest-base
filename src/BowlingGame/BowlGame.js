class Game{
    constructor(){
        this.score = 0;
    }

    roll(pins){
        this.score = this.score + pins;
    }

    resetRoll(){
        this.score = 0;
    }

    Score(){
        return this.score;
    }
}

module.exports = Game;
