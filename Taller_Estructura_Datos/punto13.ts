import * as fs from 'fs'
import * as path from 'path'
import * as xml2js from 'xml2js'

// Datos a guardar
type Persona = {
  name: string
  age: number
  birth_date: string
  programming_languages: string[]
}

const datos: Persona = {
  name: 'Juan Perez',
  age: 25,
  birth_date: '1999-01-01',
  programming_languages: ['TypeScript', 'JavaScript', 'Python'],
}

// Guardar en JSON
const jsonPath = path.join(__dirname, 'persona.json')
fs.writeFileSync(jsonPath, JSON.stringify(datos, null, 2))
console.log('Contenido JSON:')
console.log(fs.readFileSync(jsonPath, 'utf-8'))

// Guardar en XML
const builder = new xml2js.Builder()
const xml = builder.buildObject({ persona: datos })
const xmlPath = path.join(__dirname, 'persona.xml')
fs.writeFileSync(xmlPath, xml)
console.log('\nContenido XML:')
console.log(fs.readFileSync(xmlPath, 'utf-8'))

// DIFICULTAD EXTRA: Leer ambos archivos y transformar en una clase
class PersonaCustom {
  name: string
  age: number
  birth_date: string
  programming_languages: string[]

  constructor(obj: Persona) {
    this.name = obj.name
    this.age = obj.age
    this.birth_date = obj.birth_date
    this.programming_languages = obj.programming_languages
  }

  print() {
    console.log(
      `\nPersonaCustom: ${this.name}, ${this.age}, ${
        this.birth_date
      }, [${this.programming_languages.join(', ')}]`
    )
  }
}

async function main() {
  // Leer JSON
  const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))
  const personaJson = new PersonaCustom(jsonData)
  personaJson.print()

  // Leer XML
  const xmlData = fs.readFileSync(xmlPath, 'utf-8')
  const parsedXml = await xml2js.parseStringPromise(xmlData)
  const personaXml = new PersonaCustom({
    name: parsedXml.persona.name[0],
    age: Number(parsedXml.persona.age[0]),
    birth_date: parsedXml.persona.birth_date[0],
    programming_languages:
      parsedXml.persona.programming_languages[0].string ||
      parsedXml.persona.programming_languages[0].programming_languages ||
      [],
  })
  personaXml.print()

  // Borrar archivos
  fs.unlinkSync(jsonPath)
  fs.unlinkSync(xmlPath)
  console.log('\nArchivos borrados.')
}

main()
