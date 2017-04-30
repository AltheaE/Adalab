
function caracterCentral(texto){
  if (texto.length !== 0){
    if(texto.length % 2 === 0){
      console.log("Solo funciono con cadenas de longitud impar");
    }else{
      var mitad = Math.floor(texto.length / 2);
      console.log(texto.length);
      //console.log(mitad);
      //console.log(texto[mitad]);
    }
  }else{
    console.log("La cadena no puede ser vacía");
  }
}


var texto ="abcdefg";
var texto2= "abcdefghijk";

caracterCentral(texto2);
