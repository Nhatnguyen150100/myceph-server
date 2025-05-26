"use strict";

const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    const [doctors] = await queryInterface.sequelize.query(
      `SELECT id FROM "Doctors" WHERE email = 'doctor@gmail.com' LIMIT 1`
    );

    if (!doctors || doctors.length === 0) {
      throw new Error("Doctor not found. Make sure doctor seed runs first.");
    }

    const doctorId = doctors[0].id;

    const patientId = uuidv4();
    await queryInterface.bulkInsert("Patients", [
      {
        id: patientId,
        idPatientOfDoctor: doctorId,
        fullName: "Bệnh nhân mẫu",
        gender: "female",
        birthday: new Date("1999-08-21"),
        consulationDate: new Date(),
        phoneNumber: "0912345678",
        address: "123 Đường ABC, Quận 1, TP.HCM",
        chiefcomplaint: "Đau răng hàm dưới bên trái",
        note: "Cần khám sớm",
        updateByDoctor: doctorId,
        isEncrypted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("Histories", [
      {
        idHistory: patientId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("ExtraOrals", [
      {
        idExtraOral: patientId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("IntraOrals", [
      {
        idIntraOral: patientId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("Radiographies", [
      {
        idRadiography: patientId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("DiagnosisAndTreatments", [
      {
        idDiagnosisAndTreatment: patientId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("DiagnosisAndTreatments", null, {});
    await queryInterface.bulkDelete("Radiographies", null, {});
    await queryInterface.bulkDelete("IntraOrals", null, {});
    await queryInterface.bulkDelete("ExtraOrals", null, {});
    await queryInterface.bulkDelete("Histories", null, {});
    await queryInterface.bulkDelete("ActivityHistories", null, {});
    await queryInterface.bulkDelete("Patients", {
      fullName: "Bệnh nhân mẫu",
    });
  },
};
