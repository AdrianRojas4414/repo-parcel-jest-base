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
        this.rolls.fill(0);
        this.currentRoll = 0;
    }

    Score(){
        let score = 0;
        let frameIndex = 1;
        for(let frame=0; frame<10; frame++){
            if(this.isStrike(frameIndex)){
                score = score + 10 + this.strikeBonus(frameIndex);
                frameIndex++;
            }else if(this.isSpare(frameIndex)){
                score = score + 10 + this.spareBonus(frameIndex);
                frameIndex = frameIndex + 2;
            }else{
                score = score + this.sumOfBalls_inFrame(frameIndex); // se suman los dos lanzamientos que no suman 10
                frameIndex = frameIndex + 2;
            }
        }
        return score;
    }

    isSpare(frameIndex){
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10; //se suman los dos lanzamientos para ver si suman 10
    }

    spareBonus(frameIndex){
        return this.rolls[frameIndex+2];
    }

    isStrike(frameIndex){
        return this.rolls[frameIndex] === 10;
    }

    strikeBonus(frameIndex){
        return this.rolls[frameIndex+1] + this.rolls[frameIndex+2];
    }

    sumOfBalls_inFrame(frameIndex){
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
    }

}

module.exports = Game;
