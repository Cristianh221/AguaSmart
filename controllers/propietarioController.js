const propietario = require('../models').propietario_model;

module.exports = {
  list(req, res) {
    return propietario
      .findAll({})
      .then((propietario) => res.status(200).send(propietario))
      .catch((error) => { res.status(400).send(error); });
  },
  getById(req, res) {

    console.log(req.params.id);

    return propietario
      .findByPk(req.params.id)
      .then((propietario) => {
        console.log(propietario);
        if (!propietario) {
          return res.status(404).send({
            message: 'propietario Not Found',
          });
        }
        return res.status(200).send(propietario);
      })
      .catch((error) =>
        res.status(400).send(error));
  },
  add(req, res) {
    return propietario
      .create({
        nombre: req.body.nombre,
        identificacion: req.body.identificacion,
        telefono: req.body.telefono,
        email: req.body.email,
        direccion: req.body.direccion
      })
      .then((propietario) => res.status(201).send(propietario))
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return propietario
      .findByPk(req.params.id)
      .then(propietario => {
        if (!propietario) {
          return res.status(404).send({
            message: 'propietario Not Found',
          });
        }
        return propietario
          .update({
            nombre: req.body.nombre || propietario.nombre,
            identificacion: req.body.identificacion || propietario.identificacion,
            telefono: req.body.telefono || propietario.telefono,
            email: req.body.email || usuario.email,
            direccion: req.body.direccion || usuario.direccion
          })
          .then(() => res.status(200).send(propietario))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  delete(req, res) {
    return propietario
      .findByPk(req.params.id)
      .then(propietario => {
        if (!propietario) {
          return res.status(400).send({
            message: 'propietario Not Found',
          });
        }
        return propietario
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
}; 