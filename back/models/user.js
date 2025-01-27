"use strict";
const bcrypt = require("bcryptjs");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Pix, {
        foreignKey: "clientId",
        onDelete: "CASCADE",
        as: "pixs",
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUnique: async function (value) {
            const user = await User.findOne({ where: { cpf: value } });
            if (user) {
              throw new Error("Este CPF já existe");
            }
          },
        },
      },
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  // Geração de hash para a senha antes de salvar no banco
  User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  });

  return User;
};
