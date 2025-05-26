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
      "Histories",
      {
        dentalHistory: "Đã từng nhổ răng khôn, niềng răng nhẹ",
        medicalHistory: "Tiền sử đau dạ dày",
        cvmi: "Giai đoạn 3",
        otherMethodToEvaluate: "Chụp phim X-quang toàn hàm",
        respiration: "Thở bình thường",
        habits: "Nghiến răng khi ngủ",
        familyHistory: "Gia đình có người bị sâu răng nặng",
        compliance: "Good",
        updatedAt: new Date(),
      },
      {
        idHistory: patientId,
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
        "Histories",
        {
          dentalHistory: null,
          medicalHistory: null,
          cvmi: null,
          otherMethodToEvaluate: null,
          respiration: null,
          habits: null,
          familyHistory: null,
          compliance: null,
          updatedAt: new Date(),
        },
        {
          idHistory: patientId,
        }
      );
    }
  },
};
