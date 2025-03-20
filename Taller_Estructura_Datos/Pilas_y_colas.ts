// 8)  Pilas y colas
class Pila<T> {
	// Usamos un genérico <T> para que la pila pueda ser de cualquier tipo
	private elementos: T[] = []; // Usamos un array privado para almacenar los elementos

	push(elemento: T): void {
		this.elementos.push(elemento); // Añadir al final del array (cima de la pila)
	}

	pop(): T | undefined {
		return this.elementos.pop(); // Remover y retornar el último elemento (cima de la pila)
	}

	peek(): T | undefined {
		return this.elementos[this.elementos.length - 1]; // Ver el último elemento sin removerlo
	}

	isEmpty(): boolean {
		return this.elementos.length === 0;
	}

	size(): number {
		return this.elementos.length;
	}
}

// Ejemplo de uso de la Pila
const pilaNumeros = new Pila<number>();

pilaNumeros.push(10);
pilaNumeros.push(20);
pilaNumeros.push(30);

console.log("Pila después de push:", pilaNumeros); // No se imprime la pila directamente de forma bonita, pero se puede ver su estado en la consola del navegador o Node.js
console.log("Tamaño de la pila:", pilaNumeros.size()); // 3
console.log("Cima de la pila (peek):", pilaNumeros.peek()); // 30
console.log("Pop:", pilaNumeros.pop()); // 30 (y lo remueve)
console.log("¿Está vacía?:", pilaNumeros.isEmpty()); // false

while (!pilaNumeros.isEmpty()) {
	console.log("Desapilando:", pilaNumeros.pop()); // Desapila 20, luego 10
}

console.log("¿Está vacía después de desapilar todo?:", pilaNumeros.isEmpty()); // true
