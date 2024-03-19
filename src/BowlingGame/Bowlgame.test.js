const Game = require("./BowlGame");

describe("Bowling Game",() =>{
    it("Se envia 0 a roll y deberia devolver 0 en el score",() =>{

        let g = new Game();

        for(let i=0; i<20; i++){
            g.roll(0);
        }

        expect(g.Score()).toEqual(0);
    })

    it("Se envia 20 puntos a roll y deberia devolver 20 en el score",() =>{

        let g = new Game();

        for(let i=0; i<20; i++){
            g.roll(1);
        }

        expect(g.Score()).toEqual(20);
    })
})