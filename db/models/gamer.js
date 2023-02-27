'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gamer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Gamer.init(
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      score: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Gamer',
    }
  );
  return Gamer;
};
