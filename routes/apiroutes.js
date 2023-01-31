const router = require('express').Router()
const store = require('../db/store')

router.get('/notes', (req, res) => {
    store.getNotes()
        .then((notes) => { res.json(notes) })
        .catch((err) => { res.status(500).json(err) })
})

router.post('/notes', (req, res) => {
    store.addNote(req.body).then((newNote) => {
        res.json(newNote)
    }).catch(err => { res.status(500).json(err) })
})

router.delete('/notes/:id', (req, res) => {
    store.deleteNote(req.params.id)
        .then(() => { res.json({ 'ok': "note successfully deleted" }) })
        .catch(err=>{res.status(500).json(err)})
})

module.exports = router