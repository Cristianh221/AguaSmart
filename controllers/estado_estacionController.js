const estado_estacion = require('../models').estado_estacion_model;

module.exports = {
  list(req, res) {
    return estado_estacion
      .findAll({})
      .then((estado_estacion) => res.status(200).send(estado_estacion))
      .catch((error) => { res.status(400).send(error); });
  },
  getById(req, res) {

    console.log(req.params.id);

    return estado_estacion
      .findByPk(req.params.id)
      .then((estado_estacion) => {
        console.log(estado_estacion);
        if (!estado_estacion) {
          return res.status(404).send({
            message: 'estado_estacion Not Found',
          });
        }
        return res.status(200).send(estado_estacion);
      })
      .catch((error) =>
        res.status(400).send(error));
  },
  add(req, res) {
    return estado_estacion
      .create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
      })
      .then((estado_estacion) => res.status(201).send(estado_estacion))
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return estado_estacion
      .findByPk(req.params.id)
      .then(estado_estacion => {
        if (!estado_estacion) {
          return res.status(404).send({
            message: 'estado_estacion Not Found',
          });
        }
        return estado_estacion
          .update({
            nombre: req.body.nombre || estado_estacion.nombre,
            descripcion: req.body.descripcion || estado_estacion.descripcion
          })
          .then(() => res.status(200).send(estado_estacion))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  delete(req, res) {
    return estado_estacion
      .findByPk(req.params.id)
      .then(estado_estacion => {
        if (!estado_estacion) {
          return res.status(400).send({
            message: 'estado_estacion Not Found',
          });
        }
        return estado_estacion
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
}; 