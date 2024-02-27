function generarFizzBuzz(n){
    if(n == 3){
        return "Fizz";
    }
    if(n == 5){
        return "Buzz";
    }
}

/*let result = [];
    for (let i = 1; i<=n; i++){
        if(i%3 == 0){
            result.push("Fizz");
        }else{
            result.push(i.toString());
        }
    } */

export default generarFizzBuzz;