function saludar(nom, edad, gene, hora) {
  if(hora >=5 && hora<=11){
    if(edad > 30){
      if(gene == "M"){
        return "Buenos dias Sr. " + nom;
      }else if(gene == "F"){
        return "Buenos dias Sra. " + nom;
      }
    }else{
      if(gene == "M"){
        return "Buenos dias joven " + nom;
      }else if(gene == "F"){
        return "Buenos dias seniorita " + nom;
      }
    }

  }else{
    if(hora >=12 && hora<=18){
      if(edad > 30){
        if(gene == "M"){
          return "Buenas tardes Sr. " + nom;
        }else if(gene == "F"){
          return "Buenas tardes Sra. " + nom;
        }
      }else{
        if(gene == "M"){
          return "Buenas tardes joven " + nom;
        }else if(gene == "F"){
          return "Buenas tardes seniorita " + nom;
        }
      }
    }else{
      if(edad > 30){
        if(gene == "M"){
           return "Buenas noches Sr. " + nom;
        }else if(gene == "F"){
           return "Buenas noches Sra. " + nom;
         }
       }else{
        if(gene == "M"){
          return "Buenas noches joven " + nom;
        }else if(gene == "F"){
          return "Buenas noches seniorita " + nom;
         }
      }
    }
  }
}
  
  export default saludar;