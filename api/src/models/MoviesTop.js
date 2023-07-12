const { DataTypes, UUID } = require('sequelize');



module.exports = (sequelize) => {
 
  sequelize.define('MoviesTop', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
     
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rate: {
      type: DataTypes.FLOAT,
      allowNull: false,
      
    },
    description: {
    type: DataTypes.TEXT,
    allowNull: true,
    },

  });
};
