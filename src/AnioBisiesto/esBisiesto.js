function bisiesto(n){
    if(n % 4 != 0){
        return false;
    }
    if(n % 4 == 0 && n % 100 != 0){
        return true;
    }
    if(n % 100 == 0 && n % 400 != 0){
        return false;
    }
    if(n % 400 == 0){
        return true;
    }else{
        return false;
    }
}

export default bisiesto;