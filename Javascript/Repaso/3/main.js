function encuentraPares(numeros){
  var resultado= [];
  for (var i = 0; i <= numeros.length; i++) {
    if (numeros[i] % 2===0) {
      resultado.push(numeros[i]);
    }

  }
  return resultado;
}
var numeros= [ 1,2,3,4,5,6,7];

var arrayfinal= encuentraPares(numeros)
console.log(arrayfinal);
