// ** Funciones **
// Función con tipos en TypeScript
function sumarTS(a: number, b: number): number {
	return a + b;
}

const resultadoSuma: number = sumarTS(5, 3); // resultadoSuma será de tipo number
// sumarTS(5, "tres"); // Error! Argumento de tipo string no asignable al parámetro de tipo number

// Expresión de función con tipos
const multiplicarTS: (a: number, b: number) => number = (
	a: number,
	b: number,
): number => a * b;

const resultadoMultiplicacion: number = multiplicarTS(4, 6);

// Con parámetros y argumentos
function saludar(nombre: string, saludoOpcional?: string): string {
	// 'saludoOpcional' es opcional
	const saludo = saludoOpcional ? saludoOpcional : "Hola";
	return `${saludo}, ${nombre}!`;
}

console.log(saludar("Ana")); // Hola, Ana!
console.log(saludar("Pedro", "Buen día")); // Buen día, Pedro!

function sumarVarios(...numeros: number[]): number {
	// 'numeros' es un array de números (rest parameter)
	let total = 0;
	for (const num of numeros) {
		total += num;
	}
	return total;
}

console.log(sumarVarios(1, 2, 3, 4, 5)); // 15

// Valor de retorno
function mostrarMensaje(mensaje: string): void {
	console.log(mensaje);
	// No retorna nada explícitamente
}

// Función de flecha
const restarTS = (a: number, b: number): number => a - b;

const resultadoResta: number = restarTS(10, 2);

// Funciones dentro de funciones
function funcionExterna() {
	function funcionInterna() {
		console.log("Soy una función interna");
	}
	funcionInterna(); // Llamada a la función interna
}

// Ejercicio opcional:
function funcionCadenaNumero(cadena1: string, cadena2: string): number {
	let contadorNumeros = 0;

	for (let i = 1; i <= 100; i++) {
		let mensaje: string | number = i; // Inicializamos con el número por defecto
		const multiploDeTres: boolean = i % 3 === 0;
		const multiploDeCinco: boolean = i % 5 === 0;

		if (multiploDeTres && multiploDeCinco) {
			mensaje = cadena1 + cadena2;
		} else if (multiploDeTres) {
			mensaje = cadena1;
		} else if (multiploDeCinco) {
			mensaje = cadena2;
		} else {
			contadorNumeros++; // Incrementa el contador si se imprime el número
		}

		console.log(mensaje);
	}

	return contadorNumeros;
}

// Ejemplo de uso de la función
const texto1 = "Múltiplo de Tres";
const texto2 = "Múltiplo de Cinco";
const cantidadNumerosImpresos: number = funcionCadenaNumero(texto1, texto2);

console.log(
	`\nCantidad de números impresos en lugar de textos: ${cantidadNumerosImpresos}`,
);
