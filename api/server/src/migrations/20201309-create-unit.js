'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Units', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      building_id:{
        type: Sequelize.INTEGER
      },
      unitNumber:{
        type: Sequelize.STRING
      },
      occupancyStatus:{
          type: Sequelize.STRING
      }, 
      floorLevel:{
        type: Sequelize.STRING
      },
      unitOwnership:{
        type: Sequelize.STRING
      },
      rent:{
        type: Sequelize.STRING
      },
      unitUse:{
        type: Sequelize.STRING
      },
      remarks:{
        type: Sequelize.STRING
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
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Units');
  }
};