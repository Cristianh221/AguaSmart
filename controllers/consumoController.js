const consumo = require('../models').consumo_model;
const estacion = require('../models').estacion_model;
const propietario = require('../models').propietario_model;

module.exports = {
  list(req, res) {
    return consumo
      .findAll({})
      .then((consumo) => res.status(200).send(consumo))
      .catch((error) => { res.status(400).send(error); });
  },
  getById(req, res) {

    console.log(req.params.id);

    return consumo
      .findByPk(req.params.id)
      .then((consumo) => {
        console.log(consumo);
        if (!consumo) {
          return res.status(404).send({
            message: 'consumo Not Found',
          });
        }
        return res.status(200).send(consumo);
      })
      .catch((error) =>
        res.status(400).send(error));
  },
  add(req, res) {
    return consumo
      .create({
        id_estacion: req.body.id_estacion,
        fecha_lectura: req.body.fecha_lectura,
        volumen_acumulado: req.body.volumen_acumulado,
        flujo_lt_min: req.body.flujo_lt_min,
        supera_umbral: req.body.supera_umbralSS
      })
      .then((consumo) => res.status(201).send(consumo))
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return consumo
      .findByPk(req.params.id)
      .then(consumo => {
        if (!consumo) {
          return res.status(404).send({
            message: 'consumo Not Found',
          });
        }
        return consumo
          .update({
            id_estacion: req.body.id_estacion || consumo.id_estacion,
            fecha_lectura: req.body.fecha_lectura || consumo.fecha_lectura,
            volumen_acumulado: req.body.volumen_acumulado || consumo.volumen_acumulado,
            flujo_lt_min: req.body.flujo_lt_min || estacion.flujo_lt_min,
            supera_umbral: req.body.supera_umbral || estacion.supera_umbral
          })
          .then(() => res.status(200).send(consumo))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  delete(req, res) {
    return consumo
      .findByPk(req.params.id)
      .then(consumo => {
        if (!consumo) {
          return res.status(400).send({
            message: 'consumo Not Found',
          });
        }
        return consumo
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  listFull(req, res) {
    return consumo
      .findAll({
        include: [
          {
            model: estacion,
            attributes: ['id', 'nombre'], // solo lo necesario
            include: [
              {
                model: propietario, // 👈 relación anidada
                attributes: ['id', 'nombre'] // 👈 solo el nombre del propietario
              }
            ]
          }
        ]
      })
      .then((consumo) => res.status(200).send(consumo))
      .catch((error) => {
        console.error(error);
        res.status(400).send(error);
      });
  },
}; 