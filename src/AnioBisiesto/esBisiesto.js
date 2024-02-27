function bisiesto(n){
    if(n % 400 == 0){
        return true;
    }else{
        return false;
    }
}

export default bisiesto;