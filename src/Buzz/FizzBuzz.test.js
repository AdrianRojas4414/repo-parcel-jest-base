import generarFizzBuzz from "./FizzBuzz";

describe("Generar un Fizz Buzz",() =>{
    it("Debe devolver el mismo numero que se le manda",() =>{
        expect(generarFizzBuzz(1)).toEqual("1")
    })

    it("Si el número es 3 o múltiplo de 3 se imprime Fizz",() =>{
        expect(generarFizzBuzz(10)).toEqual("1, 2, Fizz, 4, 5, Fizz, 7, 8, Fizz, 10")
    })
})