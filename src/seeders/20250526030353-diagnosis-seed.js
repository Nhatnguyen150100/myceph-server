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
      "DiagnosisAndTreatments",
      {
        diagnose: "Răng chen chúc, khớp cắn sâu",
        prognosisAndNotes: "Tiên lượng tốt. Điều trị bằng mắc cài cố định trong 18 tháng.",
        updatedAt: new Date(),
      },
      {
        idDiagnosisAndTreatment: patientId,
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
        "DiagnosisAndTreatments",
        {
          diagnose: null,
          prognosisAndNotes: null,
          updatedAt: new Date(),
        },
        {
          idDiagnosisAndTreatment: patientId,
        }
      );
    }
  },
};
