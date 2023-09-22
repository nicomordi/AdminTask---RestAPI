var router = require('express').Router()
var tareaController = require ('../controllers/tareaController')

router.get('/search', function(req, res) {
  tareaController.search(req, res)
})
router.get('/', function(req, res) {
  tareaController.list(req, res)
})
router.get('/:id', function(req, res) {
  tareaController.show(req, res)
})
router.post('/', function(req, res) {
  tareaController.create(req, res)
})
router.delete('/:id', function(req, res) {
  tareaController.remove(req, res)
})
module.exports = router