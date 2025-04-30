import * as fs from 'fs'

const filename = 'JLex11.txt'

// Create the file
try {
  fs.writeFileSync(filename, '')
} catch (err) {
  console.error('Error creating file:', err)
}

// Add content to the file
try {
  fs.appendFileSync(filename, 'Alexander\n')
  fs.appendFileSync(filename, '24\n')
  fs.appendFileSync(filename, 'TypeScript\n')
} catch (err) {
  console.error('Error writing to file:', err)
}

// Print the content
try {
  const content = fs.readFileSync(filename, 'utf-8')
  console.info('File content:\n', content)
} catch (err) {
  console.error('Error reading file:', err)
}

// Delete the file
try {
  fs.unlinkSync(filename)
  console.info('File deleted successfully.')
} catch (err) {
  console.error('Error deleting file:', err)
}
