'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pix extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pix.belongsTo(models.User, {
        foreignKey: 'clientId',
        onDelete: 'CASCADE',
        as: "clients"
      })
    }
  }
  Pix.init({
    clientId: DataTypes.INTEGER,
    pix_key: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pix',
  });
  
  return Pix;
};