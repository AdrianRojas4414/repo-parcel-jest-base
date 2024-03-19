describe("Prime Factors", () =>{
    it("genarate factors of 1",() =>{
        let primeFactos = new PrimeFactos();
        expect(primeFactos.generate(1)).toEqual([]);
    });

    it("genarate factors of 2",() =>{
        let primeFactos = new PrimeFactos();
        expect(primeFactos.generate(2)).toEqual([2]);
    });

    it("genarate factors of 3",() =>{
        let primeFactos = new PrimeFactos();
        expect(primeFactos.generate(3)).toEqual([3]);
    });

    it("genarate factors of 4",() =>{
        let primeFactos = new PrimeFactos();
        expect(primeFactos.generate(4)).toEqual([2, 2]);
    });
});

class PrimeFactos{
    generate(n){
        let primes = [];
        if(n > 1){
            if(n%2 == 0){
                primes.push(2);
                n = n/2;
            }
            primes.push(n);
        }
        return primes;
    }
}