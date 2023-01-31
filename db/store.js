const fs = require('fs')

const util = require('util')
const { v4: generateId } = require('uuid')

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

class Store {

    read() {
        return readFileAsync('db/db.json', 'utf8')
    }

    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note))
    }

    getNotes() {
        return this.read().then((data) => {
            return JSON.parse(data)
        })
    }

    addNote(note) {
        note.id = generateId()

        return this.getNotes().then((currentNotes) => {
            currentNotes.push(note)
            return currentNotes
        }).then((updatedNotes) => {
            return this.write(updatedNotes)
        }).then(() => {
            return note
        })

    }
    deleteNote(id) {
        return this.getNotes().then(notes => {
            return notes.filter((note) => { return note.id !== id })
        }).then(filteredNotes => {
            return this.write(filteredNotes)
        })
    }
}

module.exports = new Store();