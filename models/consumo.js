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
    fecha_lectura: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "fecha_lectura",
      autoIncrement: false
    },
    volumen_acumulado: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "volumen_acumulado",
      autoIncrement: false
    },
    flujo_lt_min: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "flujo_lt_min",
      autoIncrement: false
    },
    supera_umbral: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "supera_umbral",
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
    tableName: "consumo",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };
  const ConsumoModel = sequelize.define("consumo_model", attributes, options);
  ConsumoModel.associate = function (models) {
    ConsumoModel.belongsTo(models.estacion_model, { foreignKey: 'id_estacion' });
  };
  return ConsumoModel;
};