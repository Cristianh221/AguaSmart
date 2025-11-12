const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: true
    },
    id_estacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_estacion",
      autoIncrement: false,
      references: {
        key: "id",
        model: "estacion_model"
      }
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_usuario",
      autoIncrement: false,
      references: {
        key: "id",
        model: "usuario_model"
      }
    },
    tipo_alerta: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "tipo_alerta",
      autoIncrement: false
    },
    valor_medido: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "valor_medido",
      autoIncrement: false
    },
    umbral_aplicado: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "umbral_aplicado",
      autoIncrement: false
    },
    mensaje: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "mensaje",
      autoIncrement: false
    },
    fecha_alerta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "fecha_alerta",
      autoIncrement: false
    },
    leida: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "leida",
      autoIncrement: false
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: null,
      primaryKey: false,
      field: "fecha_creacion",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "registro_notificaciones",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const RegistroNotificacionesModel = sequelize.define("registro_notificaciones_model", attributes, options);
  RegistroNotificacionesModel.associate = function (models) {
    RegistroNotificacionesModel.belongsTo(models.estacion_model, { foreignKey: 'id_estacion' });
    RegistroNotificacionesModel.belongsTo(models.usuario_model, { foreignKey: 'id_usuario' });
  };
  return RegistroNotificacionesModel;
};