// 6) Valor y Referencia
// * primitivos *
const nombreUsuario = "Alice";
const saludoPersonalizado = `Hola, ${nombreUsuario}! Bienvenida.`; // Interpolación de variable
const operacion = `2 + 2 = ${2 + 2}`; // Interpolación de expresión
console.log(saludoPersonalizado); // Imprime: Hola, Alice! Bienvenida.
console.log(operacion); // Imprime: 2 + 2 = 4
// * objetos *
const objeto1: { valor: number } = { valor: 5 };
const objeto2: { valor: number } = objeto1; // objeto2 recibe una COPIA de la REFERENCIA a objeto1

objeto2.valor = 10; // Cambiar objeto2.valor SÍ afecta a objeto1.valor, ¡porque ambos apuntan al mismo objeto!

console.log("objeto1.valor:", objeto1.valor); // Imprime: objeto1.valor: 10 (¡CAMBIADO!)
console.log("objeto2.valor:", objeto2.valor); // Imprime: objeto2.valor: 10

const array1: number[] = [1, 2, 3];
const array2: number[] = array1; // array2 recibe una COPIA de la REFERENCIA a array1

array2.push(4); // Modificar array2 SÍ afecta a array1, ¡ambos refieren al mismo array!

console.log("array1:", array1); // Imprime: array1: [ 1, 2, 3, 4 ] (¡CAMBIADO!)
console.log("array2:", array2); // Imprime: array2: [ 1, 2, 3, 4 ]
