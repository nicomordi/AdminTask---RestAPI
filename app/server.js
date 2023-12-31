var express = require('express') //llamamos a Express
var app = express()       
var bodyParser = require('body-parser')
require('./db')       

var port = process.env.PORT || 8080  // establecemos nuestro puerto

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())            

// nuestra ruta irá en http://localhost:8080/api

var router = require('./routes')
app.use('/api', router)

//arrancamos el servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)

