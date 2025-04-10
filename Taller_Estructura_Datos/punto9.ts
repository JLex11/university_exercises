class Persona {
	nombre: string;
	edad: number;
	profesion: string;

	constructor(nombre: string, edad: number, profesion: string) {
		this.nombre = nombre;
		this.edad = edad;
		this.profesion = profesion;
		console.log("constructor ejecutado");
		console.log(
			`Se creó una nueva persona con las siguientes caracteristicas: ${this.nombre}, ${this.edad}, ${this.profesion}`,
		);
	}

	imprimirInformacion(): void {
		console.log(`Nombre: ${this.nombre}`);
		console.log(`Edad: ${this.edad}`);
		console.log(`Profesión: ${this.profesion}`);
	}
}

// Crear una instancia de la clase Persona
const persona1 = new Persona("Juan Pérez", 30, "Ingeniero");

// Imprimir la información de la persona
console.log("Información inicial de la persona:");
persona1.imprimirInformacion();

// Modificar los atributos de la persona
persona1.edad = 31;
persona1.profesion = "Ingeniero de Software";

// Imprimir la información actualizada de la persona
console.log("\nInformación actualizada de la persona:");
persona1.imprimirInformacion();

/*
 * DIFICULTAD EXTRA (opcional):
 * Implementa dos clases que representen las estructuras de Pila y Cola (estudiadas
 * en el ejercicio número 7 de la ruta de estudio)
 * - Deben poder inicializarse y disponer de operaciones para añadir, eliminar,
 *   retornar el número de elementos e imprimir todo su contenido.
 */

class Pila<T> {
	private elementos: T[] = [];

	push(elemento: T): void {
		this.elementos.push(elemento);
		console.log(`Se añadió ${elemento} a la pila.`);
	}

	pop(): T | undefined {
		const elemento = this.elementos.pop();
		if (elemento) {
			console.log(`Se eliminó ${elemento} de la pila.`);
		} else {
			console.log("La pila está vacía.");
		}
		return elemento;
	}

	peek(): T | undefined {
		if (this.elementos.length > 0) {
			return this.elementos[this.elementos.length - 1];
		} else {
			return undefined;
		}
	}

	size(): number {
		return this.elementos.length;
	}

	imprimir(): void {
		console.log("Contenido de la pila:");
		console.log(this.elementos);
	}
}

class Cola<T> {
	private elementos: T[] = [];

	enqueue(elemento: T): void {
		this.elementos.push(elemento);
		console.log(`Se añadió ${elemento} a la cola.`);
	}

	dequeue(): T | undefined {
		const elemento = this.elementos.shift();
		if (elemento) {
			console.log(`Se eliminó ${elemento} de la cola.`);
		} else {
			console.log("La cola está vacía.");
		}
		return elemento;
	}

	peek(): T | undefined {
		if (this.elementos.length > 0) {
			return this.elementos[0];
		} else {
			return undefined;
		}
	}

	size(): number {
		return this.elementos.length;
	}

	imprimir(): void {
		console.log("Contenido de la cola:");
		console.log(this.elementos);
	}
}

// Ejemplo de uso de la Pila
console.log("\nEjemplo de uso de la Pila:");
const pilaNumeros = new Pila<number>();
pilaNumeros.push(1);
pilaNumeros.push(2);
pilaNumeros.push(3);
pilaNumeros.imprimir();
pilaNumeros.pop();
pilaNumeros.imprimir();
console.log(`Tamaño de la pila: ${pilaNumeros.size()}`);

// Ejemplo de uso de la Cola
console.log("\nEjemplo de uso de la Cola:");
const colaNombres = new Cola<string>();
colaNombres.enqueue("Ana");
colaNombres.enqueue("Juan");
colaNombres.enqueue("Pedro");
colaNombres.imprimir();
colaNombres.dequeue();
colaNombres.imprimir();
console.log(`Tamaño de la cola: ${colaNombres.size()}`);
