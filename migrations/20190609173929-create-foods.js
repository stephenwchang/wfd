'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Foods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      food_question: {
        type: Sequelize.STRING
      },
      food_choices1: {
        type: Sequelize.STRING
      },
      food_choices2: {
        type: Sequelize.STRING
      },
      food_choices3: {
        type: Sequelize.STRING
      },
      food_choices4: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Foods');
  }
};