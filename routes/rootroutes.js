const express = require('express')
const rootcontrollers = require('../controllers/rootcontrollers')

const router = express.Router()

router.get('/',rootcontrollers.getbooks)
router.post('/books',rootcontrollers.createbooks)
router.put('/books/:id',rootcontrollers.updatebooks)
router.delete('/books/:id',rootcontrollers.deletebooks)

module.exports = router