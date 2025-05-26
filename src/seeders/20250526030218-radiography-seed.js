"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const [patients] = await queryInterface.sequelize.query(
      `SELECT id FROM "Patients" WHERE "Patients"."fullName" = 'Bệnh nhân mẫu' LIMIT 1;`
    );

    if (!patients || patients.length === 0) {
      throw new Error("Patient not found. Make sure patient seed runs first.");
    }

    const patientId = patients[0].id;

    await queryInterface.bulkUpdate(
      "Radiographies",
      {
        sinuses: "Bình thường",
        condyles: "Không phát hiện bất thường",
        apparentPathology: "Không có",
        alveolarBoneHeights: "Bình thường",
        crownRootRatio: "2:3",
        others: "Không",
        lateralCephalometricRadiography: "Góc ANB tăng nhẹ",
        otherRadiography: "Panorex chụp ngày 01/01/2024",
        updatedAt: new Date(),
      },
      {
        idRadiography: patientId,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    const [patients] = await queryInterface.sequelize.query(
      `SELECT id FROM "Patients" WHERE "Patients"."fullName" = 'Bệnh nhân mẫu' LIMIT 1;`
    );

    if (patients && patients.length > 0) {
      const patientId = patients[0].id;

      await queryInterface.bulkUpdate(
        "Radiographies",
        {
          sinuses: null,
          condyles: null,
          apparentPathology: null,
          alveolarBoneHeights: null,
          crownRootRatio: null,
          others: null,
          lateralCephalometricRadiography: null,
          otherRadiography: null,
          updatedAt: new Date(),
        },
        {
          idRadiography: patientId,
        }
      );
    }
  },
};
