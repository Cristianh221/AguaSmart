const estacion = require('../models').estacion_model;
const propietario = require('../models').propietario_model;
const estado_estacion = require('../models').estado_estacion_model;
const consumo = require('../models').consumo_model;

module.exports = {
  list(req, res) {
    return estacion
      .findAll({})
      .then((estacion) => res.status(200).send(estacion))
      .catch((error) => { res.status(400).send(error); });
  },
  listFull(req, res) {
    return estacion
      .findAll({
        include: [{
          model: propietario
        },
        {
          model: estado_estacion
        },
        {
          model: consumo
        }
        ]
      })
      .then((estacion) => res.status(200).send(estacion))
      .catch((error) => { res.status(400).send(error); });
  },
  getById(req, res) {

    console.log(req.params.id);

    return estacion
      .findByPk(req.params.id)
      .then((estacion) => {
        console.log(estacion);
        if (!estacion) {
          return res.status(404).send({
            message: 'estacion Not Found',
          });
        }
        return res.status(200).send(estacion);
      })
      .catch((error) =>
        res.status(400).send(error));
  },
  add(req, res) {
    return estacion
      .create({
        id_propietario: req.body.id_propietario,
        id_estado: req.body.id_estado,
        nombre: req.body.nombre,
        ubicacion: req.body.ubicacion,
        umbral_desperdicio: req.body.umbral_desperdicio
      })
      .then((estacion) => res.status(201).send(estacion))
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return estacion
      .findByPk(req.params.id)
      .then(estacion => {
        if (!estacion) {
          return res.status(404).send({
            message: 'estacion Not Found',
          });
        }
        return estacion
          .update({
            id_propietario: req.body.id_propietario || estacion.id_propietario,
            id_estado: req.body.id_estado || estacion.id_estado,
            nombre: req.body.nombre || estacion.nombre,
            ubicacion: req.body.ubicacion || estacion.ubicacion,
            umbral_desperdicio: req.body.umbral_desperdicio || estacion.umbral_desperdicio
          })
          .then(() => res.status(200).send(estacion))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  delete(req, res) {
    return estacion
      .findByPk(req.params.id)
      .then(estacion => {
        if (!estacion) {
          return res.status(400).send({
            message: 'estacion Not Found',
          });
        }
        return estacion
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
}; 