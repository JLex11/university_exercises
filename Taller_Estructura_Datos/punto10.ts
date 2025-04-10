class Animal {
	nombre: string;

	constructor(nombre: string) {
		console.log('\n');
		this.nombre = nombre;
	}

	emitirSonido(): void {
		console.log('emitirSonido() de Animal');
		console.log('Sonido genérico de animal');
	}
}

class Perro extends Animal {
	constructor(nombre: string) {
		console.log('\n');
		super(nombre);
	}

	emitirSonido(): void {
		console.log('emitirSonido() de Perro');
		console.log('Guau!');
	}
}

class Gato extends Animal {
	constructor(nombre: string) {
		console.log('\n');
		super(nombre);
	}

	emitirSonido(): void {
		console.log('emitirSonido() de Gato');
		console.log('Miau!');
	}
}

const animal = new Animal('Animal');
const perro = new Perro('Buddy');
const gato = new Gato('Whiskers');

animal.emitirSonido(); // Imprime "Sonido genérico de animal"
perro.emitirSonido(); // Imprime "Guau!"
gato.emitirSonido(); // Imprime "Miau!"

/*
 * DIFICULTAD EXTRA (opcional):
 * Implementa la jerarquía de una empresa de desarrollo formada por Empleados que
 * pueden ser Gerentes, Gerentes de Proyectos o Programadores.
 * Cada empleado tiene un identificador y un nombre.
 * Dependiendo de su labor, tienen propiedades y funciones exclusivas de su
 * actividad, y almacenan los empleados a su cargo.
 */

class Empleado {
	id: number;
	nombre: string;

	constructor(id: number, nombre: string) {
		this.id = id;
		this.nombre = nombre;
	}

	mostrarInformacion(): void {
		console.log(`\nID: ${this.id}, Nombre: ${this.nombre}`);
	}
}

class Gerente extends Empleado {
	empleadosACargo: Empleado[] = [];

	constructor(id: number, nombre: string) {
		super(id, nombre);
	}

	agregarEmpleado(empleado: Empleado): void {
		this.empleadosACargo.push(empleado);
		console.log(
			`${empleado.nombre} ha sido agregado al equipo de ${this.nombre}.`
		);
	}

	mostrarEmpleadosACargo(): void {
		console.log(`Empleados a cargo de ${this.nombre}:`);
		this.empleadosACargo.forEach((empleado) => {
			console.log(`- ${empleado.nombre}`);
		});
	}
}

class GerenteDeProyecto extends Empleado {
	proyecto: string;
	programadoresACargo: Programador[] = [];

	constructor(id: number, nombre: string, proyecto: string) {
		super(id, nombre);
		this.proyecto = proyecto;
	}

	asignarProgramador(programador: Programador): void {
		this.programadoresACargo.push(programador);
		console.log(
			`${programador.nombre} ha sido asignado al proyecto ${this.proyecto}.`
		);
	}

	mostrarProgramadoresAsignados(): void {
		console.log(`Programadores asignados al proyecto ${this.proyecto}:`);
		this.programadoresACargo.forEach((programador) => {
			console.log(`- ${programador.nombre}`);
		});
	}
}

class Programador extends Empleado {
	lenguaje: string;

	constructor(id: number, nombre: string, lenguaje: string) {
		super(id, nombre);
		this.lenguaje = lenguaje;
	}

	programar(): void {
		console.log(`${this.nombre} está programando en ${this.lenguaje}.`);
	}
}

console.log('\n\nEjemplo de la jerarquía de empleados:');
console.log('--------------------------------------------------');
// Ejemplo de uso
const gerente = new Gerente(1, 'Juan Pérez');
const gerenteProyecto = new GerenteDeProyecto(2, 'María Gómez', 'Proyecto A');
const programador1 = new Programador(3, 'Carlos López', 'TypeScript');
const programador2 = new Programador(4, 'Ana Rodríguez', 'JavaScript');

gerente.agregarEmpleado(gerenteProyecto);
gerente.agregarEmpleado(programador1);
gerente.agregarEmpleado(programador2);
gerente.mostrarEmpleadosACargo();

gerenteProyecto.asignarProgramador(programador1);
gerenteProyecto.asignarProgramador(programador2);
gerenteProyecto.mostrarProgramadoresAsignados();

programador1.programar();
programador2.programar();
