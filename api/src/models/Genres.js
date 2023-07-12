const { DataTypes, UUID } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Genres', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
     
    },
  });
};

