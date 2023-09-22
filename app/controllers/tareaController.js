var Tareas = require('../models/tareaModel')
module.exports = {
// https://docs.mongodb.com/v3.0/reference/operator/query/text/
search: async (req, res) => {

  try{
      const tarea = await Tarea.find({});
      res.json(tarea)
    
  }catch(err)
  {
    res.status(500).json({ message: 'Error la tarea no se encuentra'});
  }
  
}

,
list: async (req, res) => {
  {try
    {
    const tarea = await Tarea.list({});
    res.json(tarea)
  
}catch(err)
{
  res.status(500).json({ message: 'Error la tarea no se encuentra'});
}
}
/*
,show: function(req, res) {
  var id = req.params.id
  Tareas.findOne({_id: id}, function(err, tarea){
    if(err) {
      return res.status(500).json({
        message: 'Se ha producido un error al comenzar una tarea'
      })
    }
    if(!tarea) {
      return res.status(404).json( {
        message: 'La tarea no se finalizo'
      })
    }
    return res.json(tarea)
  })
},
create: function(req, res) {
  var tarea = new Tareas (req.body)
  tarea.create(function(err, tarea){
    if(err) {
      return res.status(500).json( {
        message: 'Error al comenzar la tarea',
        error: err
      })
    }
    return res.status(201).json({
      message: 'Tarea comenzada',
      _id: tarea._id
    })
  })
},
updateOne: function(req, res) {
  var id = req.params.id
  Tareas.findOne({_id: id}, function(err, tarea){
    if(err) {
      return res.status(500).json({
        message: 'Se ha producido un error al guardar la tarea ',
        error: err
      })
    }
    if(!tarea) {
      return res.status(404).json({
        message: 'No hemos encontrado la tarea'
      })
    }
    tarea.id = req.body.id
    tarea.nombre = req.body.nombre
    tarea.descripcionescripción =  req.body.descripcion
    tarea.fechaCreacion = req.body.fechaCreacion
    tarea.completada = req.body.completada
    

    tarea.create(function(err, tarea){
      if(err) {
        return res.status(500).json({
          message: 'Error al guardar la tarea'
        })
      }
      if(!tarea) {
        return res.status(404).json({
          message: 'No hemos encontrado la tarea'
        })
      }
      return res.json(tarea)
    })
  })
},
deleteOne: function(req, res) {
  var id = req.params.id
  Tareas.findByIdAndRemove(id, function(err, tarea){
    if(err) {
      return res.json(500, {
        message: 'No hemos encontrado la tarea'
      })
    }
    return res.json(tarea)
  })
}*/
}}
