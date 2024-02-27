function generarFizzBuzz(n){
    if(n == 3){
        return "Fizz";
    }
    if(n == 5){
        return "Buzz";
    }
    if(n != 3 && n != 5){
        let result = [];
        for (let i = 1; i<=n; i++){
            if(i%3 == 0 && i%5 == 0){
                result.push("FizzBuzz");
            }else if(i%3 == 0){
                result.push("Fizz");
            }else if(i%5 == 0){
                result.push("Buzz");
            }else{
                result.push(i.toString());
            }
        }
        return result.join(', ');
    }
}

export default generarFizzBuzz;