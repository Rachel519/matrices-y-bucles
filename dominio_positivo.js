/** Escribe una función para determinar si una matriz es positivamente dominante.
Una matriz es positivamente dominante cuando la mayoría de sus elementos son positivos.
Ejemplo:
- `positiveDom([-1, -3, -5, 4, 6767])` debería devolver `falso` 
 */

const matriz =[-1,-5,-5,4,6767]
const matrizPositiva = matriz.filter((matriz => matriz >0));
const matrizNegativa = matriz.filter ((matriz => matriz < 0))

//console.log(matrizPositiva);
//console.log(matrizNegativa);

if (matrizPositiva.length > matrizNegativa.length){
    console.log(true);
}
else{
    console.log(false);
}
   