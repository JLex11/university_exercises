// Sitio web oficial de TypeScript: https://www.typescriptlang.org/ // Comentario de una línea

/* 
Comentario de múltiples líneas 
*/

// ** Declaración de una variable y una constante **
// TypeScript (con tipo explícito)
const nombre = "Juan";
const edad = 30;
const PI: number = 3.1416;

// TypeScript (con inferencia de tipo)
const apellido = "Pérez"; // TypeScript infiere que 'apellido' es de tipo string
const anios = 35; // TypeScript infiere que 'anios' es de tipo number
const gravedad = 9.8; // TypeScript infiere que 'gravedad' es de tipo number

// ** Tipos de datos primitivos **
// string
const mensaje = "Hola mundo";
const saludo = `Bienvenido`;

// number
const entero = 42;
const decimal = 3.14;
const hexadecimal = 0xf00d;
const binario = 0b1010;
const octal = 0o744;

// boolean
const esVerdadero = true;
const esFalso = false;

// null y undefined
const nulo: null = null;
const indefinido: undefined = undefined;

// symbol (disponible desde ES6)
const simboloUnico: symbol = Symbol("id");

// bigint (para enteros muy grandes)
const numeroGrande = 9007199254740991n;

// Imprimir en consola
console.log("¡Hola, desde TypeScript!");
