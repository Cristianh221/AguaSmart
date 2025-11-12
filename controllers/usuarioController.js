const usuario = require('../models').usuario_model; 
 
module.exports = { 
  list(req, res) { 
    return usuario 
      .findAll({}) 
      .then((usuario) => res.status(200).send(usuario)) 
      .catch((error) => { res.status(400).send(error); }); 
  }, 
  getById(req, res) { 
     
    console.log(req.params.id); 
 
    return usuario 
      .findByPk(req.params.id) 
      .then((usuario) => { 
        console.log(usuario); 
        if (!usuario) { 
          return res.status(404).send({ 
            message: 'usuario Not Found', 
          }); 
        } 
        return res.status(200).send(usuario); 
      }) 
      .catch((error) => 
        res.status(400).send(error)); 
  }, 
  add(req, res) { 
    return usuario 
      .create({ 
            nombre: req.body.nombre,
            cedula: req.body.cedula,
            email: req.body.email,           
            telefono: req.body.telefono,
            password: req.body.password,
            estado: req.body.estado
      }) 
      .then((usuario) => res.status(201).send(usuario)) 
      .catch((error) => res.status(400).send(error)); 
  }, 
  update(req, res) { 
    return usuario 
      .findByPk(req.params.id) 
      .then(usuario => { 
        if (!usuario) { 
          return res.status(404).send({ 
            message: 'usuario Not Found', 
          }); 
        } 
        return usuario 
          .update({ 
            nombre: req.body.nombre || usuario.nombre, 
            cedula: req.body.cedula || usuario.cedula, 
            email: req.body.email || usuario.email, 
            password: req.body.password || usuario.password, 
            telefono: req.body.telefono || usuario.telefono, 
            estado: req.body.estado || usuario.estado 
          }) 
          .then(() => res.status(200).send(usuario)) 
          .catch((error) => res.status(400).send(error)); 
      }) 
      .catch((error) => res.status(400).send(error)); 
  }, 
  delete(req, res) { 
    return usuario 
      .findByPk(req.params.id) 
      .then(usuario => { 
        if (!usuario) { 
          return res.status(400).send({ 
            message: 'usuario Not Found', 
          }); 
        } 
        return usuario 
          .destroy() 
          .then(() => res.status(204).send()) 
          .catch((error) => res.status(400).send(error)); 
      }) 
      .catch((error) => res.status(400).send(error)); 
  }, 
}; 