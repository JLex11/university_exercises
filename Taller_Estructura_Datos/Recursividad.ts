// 7)  Recursividad
function factorialRecursivo(n: number): number {
	if (n === 0) {
		// Caso base: factorial de 0 es 1 (condición de parada para evitar bucle infinito)
		return 1;
	}
	// Paso recursivo: factorial de n es n * factorial de (n-1)
	return n * factorialRecursivo(n - 1); // La función se llama a sí misma con un problema más pequeño (n-1)
}

console.log("Factorial de 5:", factorialRecursivo(5)); // Imprime: Factorial de 5: 120 (5*4*3*2*1)
console.log("Factorial de 0:", factorialRecursivo(0)); // Imprime: Factorial de 0: 1
