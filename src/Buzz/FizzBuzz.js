function generarFizzBuzz(n){
    let result = [];
    for (let i = 1; i<=n; i++){
        if(i%3 == 0){
            result.push("Fizz");
        }else{
            result.push(i.toString());
        }
    }
    return result.join(', ');
}

export default generarFizzBuzz;