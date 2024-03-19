const Game = require("./BowlGame");

describe("Bowling Game",() =>{
    it("Se envia 0 a roll y deberia devolver 0 en el score",() =>{

        let g = new Game();

        for(let i=0; i<20; i++){
            g.roll(0);
        }

        expect(g.score()).toEqual(0);
    })
})