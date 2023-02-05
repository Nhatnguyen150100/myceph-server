'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Radiographies', {
      idPatient: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sinuses: {
        type: Sequelize.STRING
      },
      condyles: {
        type: Sequelize.STRING
      },
      apparentPathology: {
        type: Sequelize.STRING
      },
      alveolarBoneHeights: {
        type: Sequelize.STRING
      },
      crownRootRatio: {
        type: Sequelize.STRING
      },
      others: {
        type: Sequelize.STRING
      },
      laterakCephalometricRadiography: {
        type: Sequelize.STRING
      },
      otherRadiography: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Radiographies');
  }
};