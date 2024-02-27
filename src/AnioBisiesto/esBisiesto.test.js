import bisiesto from "./esBisiesto";

describe("Generar un Fizz Buzz",() =>{
    it("Todos los años divisibles por  400 SON años bisiestos",() =>{
        expect(bisiesto(4800)).toEqual(true);
    })
})