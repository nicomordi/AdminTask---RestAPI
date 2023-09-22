const { get } = require('mongoose/lib/schematype');
var Tareas = require('../models/tareaModel')
module.exports = {
// https://docs.mongodb.com/v3.0/reference/operator/query/text/
search: async (req, res) => {

  try{
      const tarea = await Tarea.search({});
      res.json(tarea)
    
  }catch(err)
  {
    res.status(500).json({ message: 'Error la tarea no se encuentra'});
  }
  
},

list: async (req, res) => {
  {try
    {
    const tarea = await Tarea.list({});
    res.json(tarea)
  
  }catch(err)  {
  res.status(500).json({ message: 'Error la tarea no se encuentra'});
  }

}},

  show: async(req, res) => {
    {try
      {
      const tarea = await Tarea.show({});
      res.json(tarea)
    
    }catch(err)  {
    res.status(500).json({ message: 'Error la tarea no se encuentra'});
    if(!tarea) {
      return res.status(404).json( {
        message: 'La tarea no se finalizo'
      })
    }}}},

create: async(req, res) =>{{
  {try
    {
    const tarea = await Tarea.create({});
    res.status(201).json({
      message: 'Tarea comenzada'}),
    res.json(tarea)
  
  }catch(err)  {
    res.status(500).json({
      message: 'Se ha producido un error al guardar la tarea '
    })
  
}}}},

remove:async(req, res) => {
  {try
    {
    const tarea = await Tarea.remove({});
    res.json(tarea)
  
  }catch(err)  {
  res.status(500).json({ message: 'No se puede eliminar la tarea porque no existe'});
  }

}}
}

