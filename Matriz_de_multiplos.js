/*
 * Cree una función que tome dos parámetros (número, longitud) y devuelva una matriz de longitud que contenga múltiplos del número.
 

Ejemplos:
- `arrayMultiplos(2, 10)` debería devolver `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]` .
- `arrayMultiplos(17, 6)` debería devolver `[17, 34, 51, 68, 85, 102]*/

/**
 * 1. Definir variable
 * 2. Obtener multiplos
 * 3.# de multiplos = longuitud
 * 4. devolver en matriz
 * 
 */
const numero= 2;
const longuitud= 10;


function multiplosVarios (numero,longuitud) {
   let multiplos = [];
    for(let i=0; i<longuitud; i++) {
        multiplos.push (numero*(i+1));
    }
    return multiplos;

}

multiplosVarios(numero,longuitud);
const valor= multiplosVarios(numero,longuitud);
console.log(valor)
