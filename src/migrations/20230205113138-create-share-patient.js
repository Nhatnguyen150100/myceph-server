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
      idOwnerDoctor: {
        allowNull: true,
        type: Sequelize.UUID,
        references:{
          model: {
            tableName: 'doctors',
            name: 'idOwnerDoctor',
          },
          key: 'id',
        }
      },
      roleOfOwnerDoctor: {
        type: Sequelize.STRING,
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