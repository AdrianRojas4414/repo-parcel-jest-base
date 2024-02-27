import generarFizzBuzz from "./FizzBuzz";

describe("Generar un Fizz Buzz",() =>{
    it("Si el número es 3 o múltiplo de 3 se imprime Fizz",() =>{
        expect(generarFizzBuzz(3)).toEqual("Fizz");
    })

    it("Si el número es 5 o múltiplo de 5 se imprime Buzz",() =>{
        expect(generarFizzBuzz(5)).toEqual("Buzz");
    })

    it("Si el número es múltiplo de 3 y 5 se imprime FizzBuzz",() =>{
        expect(generarFizzBuzz(15)).toEqual("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz");
    })
})