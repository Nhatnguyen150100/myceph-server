'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      idPatientSchdule: {
        allowNull: false,
        type: Sequelize.UUID,
        references:{
          model: {
            tableName: 'patients',
            name: 'idPatientSchdule',
          },
          key: 'id',
        }
      },
      idDoctorSchedule: {
        allowNull: false,
        type: Sequelize.UUID,
        references:{
          model: {
            tableName: 'doctors',
            name: 'idDoctorSchedule',
          },
          key: 'id',
        }
      },
      idClinicSchedule: {
        allowNull: false,
        type: Sequelize.UUID,
        references:{
          model: {
            tableName: 'clinics',
            name: 'idClinicSchedule',
          },
          key: 'id',
        }
      },
      appointmentDate: {
        type: Sequelize.DATE
      },
      startTime: {
        type: Sequelize.TIME
      },
      endTime: {
        type: Sequelize.TIME
      },
      note: {
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
    await queryInterface.dropTable('Schedules');
  }
};