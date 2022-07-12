"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class labOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      labOrder.belongsTo(models.users, {
        as: "labOrderUser",
        foreignKey: "pationtId",
      });
    }
  }
  labOrder.init(
    {
      userId: DataTypes.INTEGER,
      pationtId: DataTypes.INTEGER,
      date: DataTypes.STRING,
      time: DataTypes.STRING,
      accept: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "labOrder",
    }
  );
  return labOrder;
};
