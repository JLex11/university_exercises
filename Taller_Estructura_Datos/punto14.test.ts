import { test, expect } from "bun:test";

function suma(a: number, b: number): number {
  return a + b;
}

test("suma suma dos números correctamente", () => {
  expect(suma(2, 3)).toBe(5);
  expect(suma(-1, 1)).toBe(0);
});

const persona = {
  name: 'Juan Perez',
  age: 25,
  birth_date: '1999-01-01',
  programming_languages: ['TypeScript', 'JavaScript', 'Python'],
};

test("persona tiene todos los campos requeridos", () => {
  const campos = ['name', 'age', 'birth_date', 'programming_languages'];
  for (const campo of campos) {
    expect(persona).toHaveProperty(campo);
  }
});

test("los datos de persona son correctos", () => {
  expect(persona.name).toBe('Juan Perez');
  expect(persona.age).toBe(25);
  expect(persona.birth_date).toBe('1999-01-01');
  expect(Array.isArray(persona.programming_languages)).toBe(true);
  expect(persona.programming_languages).toContain('TypeScript');
});