var router = require('express').Router()
  router.get('/search', function(req, res) {
    res.json({ message: 'Comienza una nueva tarea' })
  })
  router.get('/', function(req, res) {
    res.json({ message: 'Estás conectado a la API. Recurso: Task Manager' })
  })
  router.get('/:id', function(req, res) {
    res.json({ message: 'Vas a obtener la tarea con id ' + req.params.id })
  })
  router.post('/', function(req, res) {
    res.json({ message: 'Se va a comenzar una nueva tarea' })
  })
  router.put('/:id', function(req, res) {
    res.json({ message: 'Vas a actualizar una tarea existente con el id' + req.params.id })
  })
  router.delete('/:id', function(req, res) {
    res.json({ message: 'Vas a borrar una tarea con el id ' + req.params.id})
  })
  module.exports = router 