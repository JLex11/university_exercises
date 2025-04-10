// ** Estructuras de datos **
// 1) Arreglos (Arrays)
// 1. Array literal (la forma más común)
const numeros: number[] = [1, 2, 3, 4, 5];
const nombres: string[] = ["Ana", "Carlos", "Sofía"];
const booleanos: boolean[] = [true, false, true];
const mixto: any[] = [1, "texto", true, null]; // Usar 'any' con moderación

// * Metodos de insercion *
const frutas: string[] = ["manzana", "banana"];
console.log("Array inicial:", frutas); // Salida: ['manzana', 'banana']

// push(): Añade al final del array
frutas.push("naranja");
console.log("Después de push:", frutas); // Salida: ['manzana', 'banana', 'naranja']

// unshift(): Añade al inicio del array
frutas.unshift("kiwi");
console.log("Después de unshift:", frutas); // Salida: ['kiwi', 'manzana', 'banana', 'naranja']

// splice(): Añade en una posición específica (y puede eliminar elementos)
frutas.splice(2, 0, "mango", "piña"); // En la posición 2, elimina 0 elementos, e inserta 'mango' y 'piña'
console.log("Después de splice (inserción):", frutas); // Salida: ['kiwi', 'manzana', 'mango', 'piña', 'banana', 'naranja']

// Acceder por índice y asignar (en realidad es actualización si ya existe el índice, inserción si es al final o más allá, pero puede dejar huecos 'undefined' si se salta índices)
frutas[frutas.length] = "fresa"; // Añade al final (como push, pero menos común directamente así)
console.log("Después de asignar por índice al final:", frutas); // Salida: ['kiwi', 'manzana', 'mango', 'piña', 'banana', 'naranja', 'fresa']

// * Métodos de eliminación *
const colores: string[] = ["rojo", "verde", "azul", "amarillo", "morado"];
console.log("Array inicial colores:", colores); // Salida: ['rojo', 'verde', 'azul', 'amarillo', 'morado']

// pop(): Elimina el último elemento y lo retorna
const ultimoColor = colores.pop();
console.log("Después de pop:", colores); // Salida: ['rojo', 'verde', 'azul', 'amarillo']
console.log("Elemento eliminado con pop:", ultimoColor); // Salida: morado

// shift(): Elimina el primer elemento y lo retorna
const primerColor = colores.shift();
console.log("Después de shift:", colores); // Salida: ['verde', 'azul', 'amarillo']
console.log("Elemento eliminado con shift:", primerColor); // Salida: rojo

// splice(): Elimina elementos desde una posición específica
const coloresBorrados = colores.splice(1, 2); // Desde la posición 1, elimina 2 elementos ('azul', 'amarillo')
console.log("Después de splice (borrado):", colores); // Salida: ['verde']
console.log("Elementos borrados con splice:", coloresBorrados); // Salida: ['azul', 'amarillo']

// delete: Elimina un elemento por índice, pero deja un hueco 'empty' (undefined)
delete colores[0];
console.log("Después de delete colores[0]:", colores); // Salida: [empty] (o [undefined] dependiendo del entorno de ejecución)
console.log("Colores[0] después de delete:", colores[0]); // Salida: undefined

// * Métodos de actualización *
let animales: string[] = ["perro", "gato", "hamster"];
console.log("Array inicial animales:", animales); // Salida: ['perro', 'gato', 'hamster']

// Acceder por índice y reasignar
animales[1] = "conejo"; // Reemplaza 'gato' con 'conejo'
console.log("Después de actualizar animales[1]:", animales); // Salida: ['perro', 'conejo', 'hamster']

// slice() y assign/spread para actualizar una porción (no es una actualización directa, crea un nuevo array con la modificación)
const parte1 = animales.slice(0, 1); // ['perro']
const parte2 = ["loro", "canario"];
const parte3 = animales.slice(2); // ['hamster']
animales = [...parte1, ...parte2, ...parte3]; // Reconstruye 'animales' con la parte modificada
console.log("Después de actualizar con slice y spread:", animales); // Salida: ['perro', 'loro', 'canario', 'hamster']

// * Métodos de ordenación *
const numerosDesordenados: number[] = [5, 2, 8, 1, 9, 4];
const nombresDesordenados: string[] = ["Carlos", "Ana", "Beatriz", "David"];
console.log("Números desordenados:", numerosDesordenados); // Salida: [5, 2, 8, 1, 9, 4]
console.log("Nombres desordenados:", nombresDesordenados); // Salida: ['Carlos', 'Ana', 'Beatriz', 'David']

// sort(): Ordena el array
// Por defecto, sort() ordena como strings (unicode point order), así que para números hay que pasar una función de comparación.
numerosDesordenados.sort((a, b) => a - b); // Orden ascendente numérico
console.log("Números ordenados ascendente:", numerosDesordenados); // Salida: [1, 2, 4, 5, 8, 9]

nombresDesordenados.sort(); // Orden alfabético (por defecto sort() para strings)
console.log("Nombres ordenados alfabéticamente:", nombresDesordenados); // Salida: ['Ana', 'Beatriz', 'Carlos', 'David']

nombresDesordenados.sort((a, b) => b.localeCompare(a)); // Orden alfabético inverso (con localeCompare para considerar acentos, etc. si fuera necesario)
console.log("Nombres ordenados alfabéticamente inverso:", nombresDesordenados); // Salida: ['David', 'Carlos', 'Beatriz', 'Ana']

// reverse(): Invierte el orden del array
numerosDesordenados.reverse();
console.log("Números invertidos (reverse):", numerosDesordenados); // Salida: [1, 2, 4, 5, 8, 9] (después de ordenar ascendente y luego reverse se vuelve descendente en este caso)

// 2) Objectos
// 1. Objeto literal (la forma más común)
const persona: { nombre: string; edad: number; profesion?: string } = {
	nombre: "Elena",
	edad: 28,
	profesion: "Desarrolladora", // 'profesion' es opcional según la definición (usando ?)
};

const coche: { marca: string; modelo: string; anio: number } = {
	marca: "Toyota",
	modelo: "Corolla",
	anio: 2022,
};

const objetoVacio: {} = {}; // Objeto vacío

// 3. Clases (para crear objetos con una estructura definida y métodos - más avanzado, pero importante en OOP con TypeScript)
class Animal {
	nombre: string;
	tipo: string;

	constructor(nombre: string, tipo: string) {
		this.nombre = nombre;
		this.tipo = tipo;
	}

	hacerSonido(): void {
		console.log("Sonido genérico de animal");
	}
}

const miAnimal = new Animal("León", "Mamífero");
console.log("Objeto creado con clase:", miAnimal);
miAnimal.hacerSonido(); // Salida: Sonido genérico de animal

// * Inserción *
const libro: { titulo: string; autor: string } = {
	titulo: "Cien años de soledad",
	autor: "Gabriel García Márquez",
};

// Dot notation (notación de punto)
libro.genero = "Realismo mágico"; // Añade la propiedad 'genero'
console.log("Después de añadir con dot notation:", libro);
// Salida: {titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', genero: 'Realismo mágico'}

const propiedadDinamica = "editorial";
libro[propiedadDinamica] = "Sudamericana"; // Añade propiedad dinámicamente
console.log("Después de añadir propiedad dinámica:", libro);
// Salida: {titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', genero: 'Realismo mágico', paginas: 496, editorial: 'Sudamericana'}

// * Métodos de eliminación *
const producto: { nombre: string; precio: number; disponible: boolean } = {
	nombre: "Laptop",
	precio: 1200,
	disponible: true,
};

// delete keyword
delete producto.disponible; // Elimina la propiedad 'disponible'
console.log("Después de delete producto.disponible:", producto); // Salida: {nombre: 'Laptop', precio: 1200}

// Asignar 'undefined' -  técnicamente no borra la propiedad, sino que le asigna el valor 'undefined'. La propiedad sigue existiendo, pero sin un valor útil.  Generalmente se prefiere 'delete' para eliminar propiedades.
producto.nombre = undefined;
console.log("Después de asignar producto.nombre = undefined:", producto); // Salida: {nombre: undefined} - propiedad 'nombre' sigue ahí, pero con valor undefined

// * Métodos de actualización *
const usuario: { nombreUsuario: string; email: string; activo: boolean } = {
	nombreUsuario: "usuario123",
	email: "usuario@example.com",
	activo: false,
};

// Dot notation
usuario.activo = true; // Actualiza la propiedad 'activo'
console.log("Después de actualizar usuario.activo:", usuario); // Salida: {nombreUsuario: 'usuario123', email: 'usuario@example.com', activo: true}

// * Métodos de ordenación *
// Los objectos en JavaScript no tienen un orden específico, pero se pueden ordenar por propiedades al convertirlos a arrays o al usar métodos como
// Object.keys(), Object.values() o Object.entries() para obtener las propiedades y luego ordenarlas.

// 3) Mapas (Map)
// 1. Constructor Map - vacío
const mapaVacio = new Map();
console.log("Mapa vacío:", mapaVacio); // Salida: Map(0) {}

// 2. Constructor Map - con inicialización (array de arrays clave-valor)
const mapaInicial = new Map([
	["nombre", "Ricardo"],
	["edad", 42],
	[true, "activo"],
	[100, "valor numerico"], // Claves pueden ser de diferentes tipos
]);
console.log("Mapa inicializado:", mapaInicial);
// Salida (aproximada, el orden de salida es el de inserción):
// Map(4) {
//   'nombre' => 'Ricardo',
//   'edad' => 42,
//   true => 'activo',
//   100 => 'valor numerico'
// }

// * Métodos de inserción *
const paisesCapitales = new Map();

// set(clave, valor): Inserta o actualiza un par clave-valor
paisesCapitales.set("España", "Madrid");
console.log("Después de set('España', 'Madrid'):", paisesCapitales); // Salida: Map(1) { 'España' => 'Madrid' }

// * Métodos de eliminación *
const agendaContactos = new Map([
	["Ana", "123-456-7890"],
	["Pedro", "987-654-3210"],
	["Lucía", "555-123-9876"],
]);

// delete(clave): Elimina la entrada con la clave especificada. Retorna true si la clave existía y fue eliminada, false si no.
const borradoPedro = agendaContactos.delete("Pedro");
console.log("Después de delete('Pedro'):", agendaContactos); // Salida: Map(2) { 'Ana' => '123-456-7890', 'Lucía' => '555-123-9876' }
console.log("¿Se borró Pedro?", borradoPedro); // Salida: true

// clear(): Elimina todas las entradas del mapa
agendaContactos.clear();
console.log("Después de clear():", agendaContactos); // Salida: Map(0) {} (mapa vacío)

// * Métodos de actualización *
// se realiza con set(clave, nuevoValor) para una clave existente. Si la clave ya existe, set reemplaza el valor asociado a esa clave.

// * Métodos de ordenación *
// Los mapas mantienen el orden de inserción, así que al iterar sobre ellos se respetará el orden en que se añadieron las entradas.

// 4) Conjuntos (Set)
// 1. Constructor Set - vacío
const conjuntoVacio = new Set();
console.log("Conjunto vacío:", conjuntoVacio); // Salida: Set(0) {}

// 2. Constructor Set - con inicialización (iterable, por ejemplo, un array)
const conjuntoInicial = new Set([10, 20, 30, 20, 10]); // Intentamos añadir duplicados
console.log("Conjunto inicializado:", conjuntoInicial); // Salida: Set(3) { 10, 20, 30 } - ¡Duplicados se eliminan!

const conjuntoStrings = new Set("hola mundo"); // Iterable es string, añade cada caracter como elemento único
console.log("Conjunto de un string:", conjuntoStrings); // Salida: Set(8) { 'h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd' }

// * Métodos de inserción *
const numerosUnicos = new Set();

// add(valor): Añade un valor al conjunto. Si el valor ya existe, no hace nada (los Sets solo tienen valores únicos)
numerosUnicos.add(10);
console.log("Después de add(10):", numerosUnicos); // Salida: Set(1) { 10 }

numerosUnicos.add(20).add(30).add(20); // Encadeamiento de add.  Intento de añadir 20 de nuevo, no tendrá efecto.
console.log("Después de añadir 20, 30, 20:", numerosUnicos); // Salida: Set(3) { 10, 20, 30 } - Sólo una instancia de cada valor

numerosUnicos.add(Number.NaN);
numerosUnicos.add(Number.NaN); // Intentar añadir NaN duplicado -  Set considera NaN === NaN para la unicidad
console.log("Después de añadir NaN duplicado:", numerosUnicos); // Salida: Set(4) { 10, 20, 30, NaN } -  ¡Solo una instancia de NaN!

// * Métodos de eliminación *
const letrasUnicas = new Set(["a", "b", "c", "d", "e"]);

// delete(valor): Elimina el valor del conjunto. Retorna true si el valor existía y fue eliminado, false si no.
const borradoC = letrasUnicas.delete("c");
console.log("Después de delete('c'):", letrasUnicas); // Salida: Set(4) { 'a', 'b', 'd', 'e' }
console.log("¿Se borró 'c'?", borradoC); // Salida: true

// clear(): Elimina todos los elementos del conjunto
letrasUnicas.clear();
console.log("Después de clear():", letrasUnicas); // Salida: Set(0) {} (conjunto vacío)

// * Métodos de actualización *
// Se realiza con add(valor) para añadir un nuevo valor o actualizar uno existente (si no es único, no se añade)

// * Métodos de ordenación *
// Los conjuntos no tienen un orden específico, pero se pueden convertir a arrays y luego ordenar si es necesario.

// Ejercicio opcional:
import * as readline from "readline";

interface Contacto {
	nombre: string;
	telefono: string;
}

const agenda: Map<Contacto> = new Map(); // Usamos un Map para almacenar contactos (nombre: telefono)

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function mostrarMenu(): void {
	console.log("\n--- Agenda de Contactos ---");
	console.log("1. Buscar contacto");
	console.log("2. Insertar contacto");
	console.log("3. Actualizar contacto");
	console.log("4. Eliminar contacto");
	console.log("5. Listar todos los contactos");
	console.log("6. Finalizar programa");
	console.log("--------------------------");
}

function obtenerInput(pregunta: string): Promise<string> {
	return new Promise((resolve) => {
		rl.question(pregunta, (respuesta) => {
			resolve(respuesta.trim());
		});
	});
}

function validarTelefono(telefono: string): boolean {
	const numeroTelefonoRegex = /^[0-9]+$/; // Regex para solo números
	return numeroTelefonoRegex.test(telefono) && telefono.length <= 11;
}

async function buscarContacto(): Promise<void> {
	const nombreBuscar = await obtenerInput(
		"Introduce el nombre del contacto a buscar: ",
	);
	const telefono = agenda.get(nombreBuscar);
	if (telefono) {
		console.log("\nContacto encontrado:");
		console.log(`Nombre: ${nombreBuscar}, Teléfono: ${telefono}`);
	} else {
		console.log(`\nContacto "${nombreBuscar}" no encontrado en la agenda.`);
	}
}

async function insertarContacto(): Promise<void> {
	const nombre = await obtenerInput("Introduce el nombre del nuevo contacto: ");
	const telefono = await obtenerInput(
		"Introduce el teléfono del nuevo contacto (máximo 11 dígitos numéricos): ",
	);

	if (!validarTelefono(telefono)) {
		console.log(
			"Error: Teléfono no válido. Debe ser numérico y de máximo 11 dígitos.",
		);
		return;
	}

	if (agenda.has(nombre)) {
		console.log(
			`Error: El contacto "${nombre}" ya existe en la agenda. Utiliza 'Actualizar' para modificar el teléfono.`,
		);
		return;
	}

	agenda.set(nombre, telefono);
	console.log(`\nContacto "${nombre}" insertado correctamente en la agenda.`);
}

async function actualizarContacto(): Promise<void> {
	const nombreActualizar = await obtenerInput(
		"Introduce el nombre del contacto a actualizar: ",
	);

	if (!agenda.has(nombreActualizar)) {
		console.log(
			`Error: El contacto "${nombreActualizar}" no existe en la agenda.`,
		);
		return;
	}

	const nuevoTelefono = await obtenerInput(
		`Introduce el nuevo teléfono para "${nombreActualizar}" (máximo 11 dígitos numéricos): `,
	);
	if (!validarTelefono(nuevoTelefono)) {
		console.log(
			"Error: Teléfono no válido. Debe ser numérico y de máximo 11 dígitos.",
		);
		return;
	}

	agenda.set(nombreActualizar, nuevoTelefono);
	console.log(`\nContacto "${nombreActualizar}" actualizado correctamente.`);
}

async function eliminarContacto(): Promise<void> {
	const nombreEliminar = await obtenerInput(
		"Introduce el nombre del contacto a eliminar: ",
	);

	if (agenda.has(nombreEliminar)) {
		agenda.delete(nombreEliminar);
		console.log(
			`\nContacto "${nombreEliminar}" eliminado correctamente de la agenda.`,
		);
	} else {
		console.log(`\nContacto "${nombreEliminar}" no encontrado en la agenda.`);
	}
}

async function listarContactos(): Promise<void> {
	if (agenda.size === 0) {
		console.log("\nLa agenda está vacía.");
	} else {
		console.log("\n--- Lista de Contactos ---");
		agenda.forEach((telefono, nombre) => {
			console.log(`Nombre: ${nombre}, Teléfono: ${telefono}`);
		});
		console.log("-------------------------");
	}
}

async function main(): Promise<void> {
	let continuar = true;

	while (continuar) {
		mostrarMenu();
		const opcion = await obtenerInput("Selecciona una opción (1-6): ");

		const opciones: { [key: string]: () => Promise<void> } = {
			"1": buscarContacto,
			"2": insertarContacto,
			"3": actualizarContacto,
			"4": eliminarContacto,
			"5": listarContactos,
			"6": async () => {
				console.log("Finalizando programa. ¡Hasta luego!");
				continuar = false;
				rl.close();
			},
		};

		if (opciones[opcion]) {
			await opciones[opcion]();
		} else {
			console.log(
				"Opción no válida. Por favor, selecciona una opción del 1 al 6.",
			);
		}
	}
}

main();
