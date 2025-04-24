// ** Operadores y estructuras de control **
const num1 = 10;
const num2 = 5;
const texto1 = "Hola";
const texto2 = "Mundo";
const verdadero = true;
const falso = false;

// Operadores aritméticos
const suma: number = num1 + num2;
const resta: number = num1 - num2;
const multiplicacion: number = num1 * num2;
const division: number = num1 / num2;
const modulo: number = num1 % num2;

// Operadores de asignación
let contador = 0;
contador += 1;
contador++;

// Operadores de comparación
const igual: boolean = num1 == num2;
const diferente: boolean = num1 != num2;
const mayorQue: boolean = num1 > num2;
const menorQue: boolean = num1 < num2;
const mayorIgualQue: boolean = num1 >= num2;
const menorIgualQue: boolean = num1 <= num2;
const estrictamenteIgual: boolean = num1 === num2; // Compara valor y tipo
const estrictamenteDiferente: boolean = num1 !== num2; // Compara valor y tipo

// Operadores lógicos
const andLogico: boolean = verdadero && falso;
const orLogico: boolean = verdadero || falso;
const notLogico = !verdadero;

// Operador condicional (ternario)
const resultado: string =
	num1 > num2 ? "Num1 es mayor" : "Num2 es mayor o igual";

// Operador typeof
const tipoDeDatoNum1: string = typeof num1; // Devuelve "number"
const tipoDeDatoTexto1: string = typeof texto1; // Devuelve "string"
const tipoDeDatoVerdadero: string = typeof verdadero; // Devuelve "boolean"

// ** Estructuras de control **
const edadPersona = 18;

if (edadPersona >= 18) {
	console.log("Es mayor de edad");
} else if (edadPersona >= 16) {
	console.log("Está cerca de ser mayor de edad");
} else {
	console.log("Es menor de edad");
}

// Switch
const diaSemana = 3; // 1: Lunes, 2: Martes, ...

switch (diaSemana) {
	case 1:
		console.log("Lunes");
		break;
	case 2:
		console.log("Martes");
		break;
	case 3:
		console.log("Miércoles");
		break;
	default:
		console.log("Otro día");
}

// Bucles
// For
for (let i = 0; i < 5; i++) {
	console.log(`Iteración número ${i}`);
}

// While
let contadorWhile = 0;
while (contadorWhile < 3) {
	console.log(`Contador while: ${contadorWhile}`);
	contadorWhile++;
}

// Do While
let contadorDoWhile = 0;
do {
	console.log(`Contador do-while: ${contadorDoWhile}`);
	contadorDoWhile++;
} while (contadorDoWhile < 3);

// For...in
interface Auto {
	marca: string;
	modelo: string;
	anio: number;
}

const miAuto: Auto = {
	marca: "Toyota",
	modelo: "Corolla",
	anio: 2020,
};

for (const propiedad in miAuto) {
	console.log(
		`Propiedad: ${propiedad}, Valor: ${miAuto[propiedad as keyof Auto]}`,
	);
}

// For...of
const colores: string[] = ["rojo", "verde", "azul"];

for (const color of colores) {
	console.log(`Color: ${color}`);
}

// Break y continue
for (let i = 0; i < 10; i++) {
	if (i === 3) {
		break; // Sale del bucle cuando i es 3
	}
	if (i % 2 === 0) {
		continue; // Salta a la siguiente iteración si i es par
	}
	console.log(`Número impar: ${i}`);
}

// 1. Números entre 10 y 55 (pares, no 16, no múltiplos de 3):
function imprimirNumerosParesNo16NoMultiplosDe3(): void {
	console.log("Números pares entre 10 y 55 (no 16, no múltiplos de 3):");
	for (let numero = 10; numero <= 55; numero++) {
		if (numero % 2 === 0 && numero !== 16 && numero % 3 !== 0) {
			console.log(numero);
		}
	}
}

imprimirNumerosParesNo16NoMultiplosDe3();

// 2. Números Primos del 1 al 1000:
function esPrimo(numero: number): boolean {
	if (numero <= 1) {
		return false; // 1 y números menores no son primos
	}
	for (let i = 2; i <= Math.sqrt(numero); i++) {
		if (numero % i === 0) {
			return false; // Si es divisible por algún número entre 2 y su raíz cuadrada, no es primo
		}
	}
	return true; // Si no se encontró ningún divisor, es primo
}

function imprimirNumerosPrimosHasta1000(): void {
	console.log("Números primos del 1 al 1000:");
	for (let numero = 2; numero <= 1000; numero++) {
		if (esPrimo(numero)) {
			console.log(numero);
		}
	}
}

imprimirNumerosPrimosHasta1000();

// 3. Serie de Fibonacci:
function imprimirSerieFibonacci(cantidadNumeros: number): void {
	if (cantidadNumeros <= 0) {
		return; // No hacer nada si se piden 0 o menos números
	}

	let a = 0;
	let b = 1;

	console.log("Serie de Fibonacci:");
	console.log(a); // Imprime el primer número (0)

	if (cantidadNumeros > 1) {
		console.log(b); // Imprime el segundo número (1)
	}

	for (let i = 2; i < cantidadNumeros; i++) {
		const siguiente: number = a + b;
		console.log(siguiente);
		a = b; // Actualiza 'a' al valor anterior de 'b'
		b = siguiente; // Actualiza 'b' al nuevo valor 'siguiente'
	}
}

// Imprimir los primeros 10 números de la serie de Fibonacci
imprimirSerieFibonacci(10);
