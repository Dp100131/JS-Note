//const arreglo = new Array(100); // Arreglos con tamaños fijos

const arreglo = [1, 2, 3, 4];

// Modifica el arreglo principal arreglo.push(1);
// Modifica el arreglo principal arreglo.push(2);
// Modifica el arreglo principal arreglo.push(3);
// Modifica el arreglo principal arreglo.push(4);
// Modifica el arreglo principal arreglo.push(5);

/* let arreglo2 = arreglo;
arreglo2.push(5) */

let arreglo2 = [...arreglo, 5]

/**
 * MAP
 * 
 * retorna una función.
 */
const arreglo3 = arreglo2.map(data => data*2)

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);