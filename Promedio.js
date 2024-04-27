/**Dada una matriz, devuelva una matriz más corta siguiendo estos pasos:
- Divida la matriz en dos partes iguales*. Si no es igual, elimine el elemento del medio para obtener dos matrices iguales.
- Sumar cada número de la primera parte con los números inversos de la segunda parte.
- Divide cada número de la matriz resultante entre 2.
 Ejemplo:
- Para la matriz `[1,2,3,5,22,6]` , el resultado debe ser `[3.5, 12, 4]` .
 */
const primeraMatriz = [1,2,3,5,22,6,7];

//Division de matrices
const segundaMatriz = primeraMatriz.slice(i=0, primeraMatriz.length/2);
console.log(segundaMatriz);

const terceraMatriz = primeraMatriz.slice(primeraMatriz.length/2);
console.log(terceraMatriz);
//Si una matriz tiene numero impar
/**if (Number.isInteger(primeraMatriz.length/2)){
let numeroEntero = "Es numero entero";
}
else {
    let numeroNoEntero = "No es numero entero";
    var matrizImpar= primeraMatriz.map(function (x){
        return primeraMatriz.pop(i=0,i==i/2)
    })
    console.log(matrizImpar)
}
*/
//Matriz Inversa
const matrizInversa= terceraMatriz.reverse();
console.log(matrizInversa);
//Suma de matrices
function sumaMatrices(segundaMatriz,matrizInversa){
    let suma = [];
    for(let i=0; i<segundaMatriz.length; i++){
        suma.push(segundaMatriz[i]+matrizInversa[i]);
    }
    return suma;
}
const valor= sumaMatrices(segundaMatriz,matrizInversa);
console.log(valor)

// divisiòn de la matriz final
const divisor=2;
const matrizADividir= valor;
let resultado=[];
resultado=valor.map(function(x){
    return x/divisor;
})
console.log(resultado)
