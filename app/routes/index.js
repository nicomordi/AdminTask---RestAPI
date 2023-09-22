var router = require('express').Router()
var tareas = require('./tareas')

router.use('/tareas', tareas)

router.get('/', function (req, res) {
  res.status(200).json({ message: 'Estás conectado a nuestra API' })
})

module.exports = router