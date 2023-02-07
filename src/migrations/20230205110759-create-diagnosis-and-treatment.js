'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DiagnosisAndTreatments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idDiagnosisAndTreatment: {
        allowNull: false,
        autoIncrement: false,
        unique: true,
        type: Sequelize.INTEGER
      },
      diagnose: {
        type: Sequelize.STRING
      },
      prognosisAndNotes: {
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
    await queryInterface.dropTable('DiagnosisAndTreatments');
  }
};