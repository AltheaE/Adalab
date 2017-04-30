var numero= 6 ;
var arrayDeNumeros= [6,5,4,3,2,6,1,6,8,6] ;
function cuentaNumeros( numero,arrayDeNumeros) {
  var resultado = 0;
  for (var i = 0; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i]=== numero) {
      resultado = resultado+1;
    }
  }
    return resultado;
}
 resultado= cuentaNumeros(numero,arrayDeNumeros);
