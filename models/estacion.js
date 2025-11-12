const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: true
    },
    id_propietario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_propietario",
      autoIncrement: false,
      references: {
        key: "id",
        model: "propietario_model"
      }
    },
    id_estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_estado",
      autoIncrement: false,
      references: {
        key: "id",
        model: "estado_estacion_model"
      }
    },
    nombre: {
      type: DataTypes.CHAR(100),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "nombre",
      autoIncrement: false
    },
    ubicacion: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "ubicacion",
      autoIncrement: false
    },
    umbral_desperdicio: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "umbral_desperdicio",
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
    },
    fecha_actualizacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "fecha_actualizacion",
      autoIncrement: false
    },
    fecha_eliminacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "fecha_eliminacion",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "estacion",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const EstacionModel = sequelize.define("estacion_model", attributes, options);
  EstacionModel.associate = function (models) {
    EstacionModel.belongsTo(models.propietario_model, { foreignKey: 'id_propietario' });
    EstacionModel.belongsTo(models.estado_estacion_model, { foreignKey: 'id_estado' });
    EstacionModel.hasMany(models.consumo_model, { foreignKey: 'id_estacion' });
    EstacionModel.hasMany(models.registro_notificaciones_model, { foreignKey: 'id_estacion' });
  };
  return EstacionModel;
};