const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../prisma');

const Records = sequelize.define('record',{
    name: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    is_vaccinated: {
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    birthdate: {
        type:DataTypes.STRING,
        allowNull:false
    },
    gender:{
        type:DataTypes.STRING,
        allowNull:false
    },
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        _autoGenerated: true
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }

});

(async ()=>{
    await sequelize.sync({force:true});
})();




module.exports = Records;