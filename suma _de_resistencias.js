/**
 * Calcule la suma de todas las resistencias conectadas en serie.
Ejemplos:
- `sumResitance([-1,5,6,3])` debería devolver `"15 ohmios"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` debería devolver ``23,5 ohmios''. (14 + 3,5 + 6 = 23,5)
- `sumResitance([8,15,100])` debería devolver ``123 ohmios''. (8 + 15 + 100 = 123)

Nota: Este enfoque utiliza el valor absoluto de cada resistencia para garantizar que todos los valores sean positivos.
 */
const res1 = [-1,5,6,3];
const res2 = [14,3.5,6];
const res3 = [8,15,100];
function sumResistencia(arr){
    const arr2=[];
    let res=0
    arr.forEach((e) => arr2.push(Math.abs(e)));
    arr2.forEach((e) => (res=res+e));
    console.log(`${res} ohms`);
}

sumResistencia(res3);
