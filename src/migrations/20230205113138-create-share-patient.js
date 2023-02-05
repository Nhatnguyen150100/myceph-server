'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SharePatients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPatient: {
        type: Sequelize.INTEGER
      },
      idDoctor: {
        type: Sequelize.INTEGER
      },
      idClinic: {
        type: Sequelize.INTEGER
      },
      idOwerDoctor: {
        type: Sequelize.INTEGER
      },
      roleOfWoerDoctor: {
        type: Sequelize.STRING
      },
      idOwerClinic: {
        type: Sequelize.INTEGER
      },
      roleOfOwerClinic: {
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
    await queryInterface.dropTable('SharePatients');
  }
};