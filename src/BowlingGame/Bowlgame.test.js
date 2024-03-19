const Game = require("./BowlGame");

let g = new Game();

function rollMany(n, pins){
    for(let i=0; i<n; i++){
        g.roll(pins);
    }
}

function rollStrike(){
    g.roll(10);
}

function rollSpare(){
    g.roll(5);
    g.roll(5);
}

describe("Bowling Game",() =>{
    it("Se envia 0 a roll y deberia devolver 0 en el score",() =>{
        rollMany(20, 0);
        expect(g.Score()).toEqual(0);
    })

    it("Se envia 20 puntos a roll y deberia devolver 20 en el score",() =>{
        g.resetRolls();
        rollMany(20, 1);
        expect(g.Score()).toEqual(20);
    })

    it("Se hace un spare y se caen 3 pinos en el siguiente lanzamiento y deberia devolver 16 en el score",() =>{
        g.resetRolls();
        rollSpare();  // se realiza un spare
        g.roll(3);   // en el siguiente lanzamiento se tiran 3 pinos
        rollMany(17, 0);
        expect(g.Score()).toEqual(16);
    })

    it("Se hace un strike y se caen 3 y 4 pinos en los siguientes lanzamientos y deberia devolver 24 en el score",() =>{
        g.resetRolls();
        rollStrike();
        g.roll(3);
        g.roll(4);
        rollMany(16, 0);
        expect(g.Score()).toEqual(24);
    })

    it("Se lanza 12 veces y todos son strikes, deberia devolver 300 como score final",() =>{
        g.resetRolls();
        rollMany(12, 10);
        expect(g.Score()).toEqual(300);
    })
})

