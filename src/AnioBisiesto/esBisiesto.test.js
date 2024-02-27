import bisiesto from "./esBisiesto";

describe("Es Bisiesto",() =>{
    it("Todos los años divisibles por  400 SON años bisiestos",() =>{
        expect(bisiesto(4800)).toEqual(true);
    })

    it("Todos los años que no son divisibles por 400 NO SON años bisiestos",() =>{
        expect(bisiesto(4805)).toEqual(false);
    })

    it("Todos los años divisibles por 100 pero no por 400 NO son años bisiestos",() =>{
        expect(bisiesto(1900)).toEqual(false);
    })

    it("Todos los años divisibles por 4 pero no por 100 SON años bisiestos",() =>{
        expect(bisiesto(2016)).toEqual(true);
    })

    it("Todos los años que no son divisibles por 4 NO son años bisiestos",() =>{
        expect(bisiesto(2018)).toEqual(false);
    })
})