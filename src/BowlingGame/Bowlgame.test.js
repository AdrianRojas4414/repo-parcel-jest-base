const Game = require("./BowlGame");

let g = new Game();

describe("Bowling Game",() =>{
    it("Se envia 0 a roll y deberia devolver 0 en el score",() =>{
        rollMany(20, 0);
        expect(g.Score()).toEqual(0);
    })

    it("Se envia 20 puntos a roll y deberia devolver 20 en el score",() =>{
        rollMany(20, 1);
        expect(g.Score()).toEqual(20);
    })

})

function rollMany(n, pins){
    for(let i=0; i<n; i++){
        g.roll(pins);
    }
}