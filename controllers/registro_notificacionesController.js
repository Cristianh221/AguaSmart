const registro_notificacion = require('../models').registro_notificacion_model;

module.exports = {
  list(req, res) {
    return registro_notificacion
      .findAll({})
      .then((registro_notificacion) => res.status(200).send(registro_notificacion))
      .catch((error) => { res.status(400).send(error); });
  },
  getById(req, res) {

    console.log(req.params.id);

    return registro_notificacion
      .findByPk(req.params.id)
      .then((registro_notificacion) => {
        console.log(registro_notificacion);
        if (!registro_notificacion) {
          return res.status(404).send({
            message: 'registro_notificacion Not Found',
          });
        }
        return res.status(200).send(registro_notificacion);
      })
      .catch((error) =>
        res.status(400).send(error));
  },
  add(req, res) {
    return registro_notificacion
      .create({
        id_estacion: req.body.id_estacion,
        id_usuario: req.body.id_usuario,
        tipo_alerta: req.body.tipo_alerta,
        valor_medio: req.body.valor_medio,
        umbral_aplicado: req.body.umbral_aplicado,
        mensaje: req.body.mensaje,
        fecha_alerta: req.body.fecha_alerta,
        leida: req.body.leida
      })
      .then((registro_notificacion) => res.status(201).send(registro_notificacion))
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return registro_notificacion
      .findByPk(req.params.id)
      .then(registro_notificacion => {
        if (!registro_notificacion) {
          return res.status(404).send({
            message: 'registro_notificacion Not Found',
          });
        }
        return registro_notificacion
          .update({
            id_estacion: req.body.id_estacion || registro_notificacion.id_estacion,
            id_usuario: req.body.id_usuario || registro_notificacion.id_usuario,
            tipo_alerta: req.body.tipo_alerta || registro_notificacion.tipo_alerta,
            valor_medio: req.body.valor_medio || usuario.valor_medio,
            umbral_aplicado: req.body.umbral_aplicado || usuario.umbral_aplicado,
            mensaje: req.body.mensaje || usuario.mensaje,
            fecha_alerta: req.body.fecha_alerta || usuario.fecha_alerta,
            leida: req.body.leida || usuario.leida
          })
          .then(() => res.status(200).send(registro_notificacion))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  delete(req, res) {
    return registro_notificacion
      .findByPk(req.params.id)
      .then(registro_notificacion => {
        if (!registro_notificacion) {
          return res.status(400).send({
            message: 'registro_notificacion Not Found',
          });
        }
        return registro_notificacion
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
}; 