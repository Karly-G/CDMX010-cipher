const cipher = { //constcipher es un objeto
  // ... Aqui van las funciones
  
  encode: function(offset,texto) {
    texto = texto.toUpperCase();
    let passwordCifrado = "";
    if(texto!=null){
      for (let i = 0; i < texto.length; i++) { 
        let ascii = texto.charCodeAt(i);
        let formula = ((ascii - 65 + offset) % 26 + 65);
        passwordCifrado += String.fromCharCode(formula);
      }
    } else {  
      alert("Solo ingresa mayúsculas y no admite la letra Ñ");
    }
    return passwordCifrado;
  },

  decode: function(offset,texto){
    texto = texto.toUpperCase();
    let passwordDescifrado = "";
    for (let i = 0; i < texto.length; i++) {
      let ascii = texto.charCodeAt(i);
      ascii = ((ascii + 65 - offset) % 26 + 65);
      passwordDescifrado += String.fromCharCode(ascii);
    }
    return passwordDescifrado;
  }
  };

export default cipher;

//scope