function saludar(nom, edad, gene) {
  if(edad > 30){
    if(gene == "M"){
      return "Sr. " + nom;
    }else if(gene == "F"){
      return "Sra. " + nom;
    }
  }else{
    if(gene == "M"){
      return "joven " + nom;
    }else if(gene == "F"){
      return "seniorita " + nom;
    }
  }
  }
  
  export default saludar;