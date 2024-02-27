import bisiesto from "./esBisiesto";

describe("Es Bisiesto",() =>{
    it("Todos los años divisibles por  400 SON años bisiestos",() =>{
        expect(bisiesto(4800)).toEqual(true);
    })

    it("Todos los años que no son divisibles por 400 NO SON años bisiestos",() =>{
        expect(bisiesto(4800)).toEqual(false);
    })
})