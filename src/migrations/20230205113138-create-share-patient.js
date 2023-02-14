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
      idSharedPatient: {
        allowNull: false,
        type: Sequelize.UUID,
        references:{
          model: {
            tableName: 'patients',
            name: 'idSharedPatient',
          },
          key: 'id',
        }
      },
      idSharedPatientOfDoctor: {
        allowNull: true,
        type: Sequelize.UUID,
        references:{
          model: {
            tableName: 'doctors',
            name: 'idSharedPatientOfDoctor',
          },
          key: 'id',
        }
      },
      idSharedPatientOfClinic: {
        allowNull: true,
        type: Sequelize.UUID,
        references:{
          model: {
            tableName: 'clinics',
            name: 'idSharedPatientOfClinic',
          },
          key: 'id',
        }
      },
      idOwerDoctor: {
        allowNull: true,
        type: Sequelize.UUID,
        references:{
          model: {
            tableName: 'doctors',
            name: 'idOwerDoctor',
          },
          key: 'id',
        }
      },
      roleOfWoerDoctor: {
        type: Sequelize.STRING,
      },
      idOwerClinic: {
        allowNull: true,
        type: Sequelize.UUID,
        references:{
          model: {
            tableName: 'clinics',
            name: 'idOwerClinic',
          },
          key: 'id',
        }
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