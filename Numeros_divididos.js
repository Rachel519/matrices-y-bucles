/**
 * Dado un número, devuelve el número dividido en sus mitades en una matriz.
Ejemplos:
- `numDiv(4)` debería devolver `[2, 2]` .
- `numDiv(10)` debería devolver `[5, 5]` .
 */ 
const n =4;
const n2 = 10;

function numDiv(num){
    let res =[];
    const half= num/2;
    res.push(half);
    res.push(half);
return res;
}
console.log(numDiv(n));