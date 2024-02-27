import generarFizzBuzz from "./FizzBuzz";

describe("Generar un Fizz Buzz",() =>{
    it("Si el número es 3 o múltiplo de 3 se imprime Fizz",() =>{
        expect(generarFizzBuzz(3)).toEqual("Fizz")
    })

    it("Si el número es 5 o múltiplo de 5 se imprime Buzz",() =>{
        expect(generarFizzBuzz(5)).toEqual("Buzz")
    })
})