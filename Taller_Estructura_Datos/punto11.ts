// Manejo de excepciones basico
console.log('Manejo de excepciones basico:');
try {
	const result = 10 / 0;
	console.info('operacion: 10 / 0');
	// console.log('Resultado :', result);
	if (result === Number.POSITIVE_INFINITY) {
		throw new Error('Division por cero no permitida.');
	}
} catch (error: any) {
	console.error('Error capturado:', error.message);
}
console.log('El programa continua ejecutandose.');

// Acceso a un índice no existente
console.log('\nAcceso a un indice no existente en un array:');
try {
	const arr = [1, 2, 3];
	console.info('Array:', arr);
	console.log('Elemento:', arr[5]); // Error
} catch (error: any) {
	console.error('Error capturado:', error.message);
}
console.log('El programa continua ejecutandose.');

// Dificultad extra
console.log('\nEjercicio de dificultad extra:');

class CustomError extends Error {
	constructor(message: string) {
		console.error('Error personalizado:', message);
		super(message);
		this.name = 'CustomError';
	}
}

function procesarParametros(param1: number, param2: number): number {
	if (param1 < 0 || param2 < 0) {
		console.info('param1 < 0 || param2 < 0');
		throw new CustomError('Los parametros no pueden ser negativos.');
	}
	if (param2 === 0) {
		console.info('param2 === 0');
		throw new Error('El segundo parametro no puede ser cero.');
	}
	if (param1 > 100) {
		console.info('param1 > 100');
		throw new RangeError('El primer parametro no puede ser mayor que 100.');
	}
	return param1 / param2;
}

try {
	const resultado = procesarParametros(10, 2);
	console.log('Resultado:', resultado);
	console.log('No se ha producido ningun error.');
} catch (error: any) {
	console.error('Tipo de error:', error.name);
	console.error('Mensaje de error:', error.message);
} finally {
	console.log('La ejecución ha finalizado.');
}

try {
	const resultado = procesarParametros(-1, 2);
	console.log('Resultado:', resultado);
	console.log('No se ha producido ningun error.');
} catch (error: any) {
	console.error('Tipo de error:', error.name);
	console.error('Mensaje de error:', error.message);
} finally {
	console.log('La ejecución ha finalizado.');
}
