"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    const [patients] = await queryInterface.sequelize.query(
      `SELECT id FROM "Patients" WHERE "Patients"."fullName" = 'Bệnh nhân mẫu' LIMIT 1;`
    );

    if (!patients || patients.length === 0) {
      throw new Error("Không tìm thấy bệnh nhân. Hãy chắc chắn đã seed bảng Patients.");
    }

    const patientId = patients[0].id;
    const now = new Date();

    await queryInterface.bulkInsert("TreatmentHistories", [
      {
        id: uuidv4(),
        idTreatmentHistory: patientId,
        currentStatus: "Đang trong giai đoạn chỉnh nha bằng mắc cài tự buộc",
        performedProcedures: "Gắn mắc cài, nong hàm, điều chỉnh dây cung",
        consultationDate: new Date("2024-12-15"),
        createdAt: now,
        updatedAt: now,
      },
      {
        id: uuidv4(),
        idTreatmentHistory: patientId,
        currentStatus: "Bệnh nhân ổn định, theo dõi hàng tháng",
        performedProcedures: "Kiểm tra định kỳ, thay dây cung, điều chỉnh lực kéo",
        consultationDate: new Date("2025-01-20"),
        createdAt: now,
        updatedAt: now,
      },
      {
        id: uuidv4(),
        idTreatmentHistory: patientId,
        currentStatus: "Đã hoàn thành giai đoạn 1, chuẩn bị cho giai đoạn duy trì",
        performedProcedures: "Tháo mắc cài, lấy dấu răng làm hàm duy trì",
        consultationDate: new Date("2025-05-10"),
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    const [patients] = await queryInterface.sequelize.query(
      `SELECT id FROM "Patients" WHERE "Patients"."fullName" = 'Bệnh nhân mẫu' LIMIT 1;`
    );

    if (patients && patients.length > 0) {
      const patientId = patients[0].id;

      await queryInterface.bulkDelete("TreatmentHistories", {
        idTreatmentHistory: patientId,
      });
    }
  },
};
