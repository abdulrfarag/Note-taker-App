const fs = require('fs')

const util = require('util')
const { v4: generateId } = require('uuid')

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

class Store {

    read() {
        return readFileAsync('db/db.json', 'utf8')
    }
