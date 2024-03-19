class Game{
    constructor(){
        this.rolls = new Array(21).fill(0);
        this.currentRoll = 0;
    }

    roll(pins){
        this.currentRoll++;
        this.rolls[this.currentRoll] = pins;
    }

    resetRolls(){
        this.rolls = new Array(21).fill(0);
        this.currentRoll = 0;
    }

    Score(){
        let score = 0;
        for(let i=0; i<this.rolls.length; i++){
            score = score + this.rolls[i];
        }
        return score;
    }
}

module.exports = Game;
