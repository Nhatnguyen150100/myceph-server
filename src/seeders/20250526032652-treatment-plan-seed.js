"use strict";
const { v4: uuidv4 } = require("uuid");
module.exports = {
  async up(queryInterface, Sequelize) {
    const [patients] = await queryInterface.sequelize.query(
      `SELECT id FROM "Patients" WHERE "Patients"."fullName" = 'Bệnh nhân mẫu' LIMIT 1;`
    );

    if (!patients || patients.length === 0) {
      throw new Error("Không tìm thấy bệnh nhân. Hãy seed bệnh nhân trước.");
    }

    const patientId = patients[0].id;
    const now = new Date();

    await queryInterface.bulkInsert("TreatmentPlans", [
      {
        id: uuidv4(),
        idTreatmentPlan: patientId,
        plan: "Kế hoạch 1: Dùng mắc cài kim loại truyền thống trong 24 tháng",
        selected: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: uuidv4(),
        idTreatmentPlan: patientId,
        plan: "Kế hoạch 2: Dùng mắc cài tự buộc kết hợp nong hàm trong 20 tháng",
        selected: false,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: uuidv4(),
        idTreatmentPlan: patientId,
        plan: "Kế hoạch 3: Chỉnh nha trong giai đoạn tăng trưởng kết hợp khí cụ chức năng",
        selected: false,
        createdAt: now,
        updatedAt: now,
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    const [patients] = await queryInterface.sequelize.query(
      `SELECT id FROM "Patients" WHERE "Patients"."fullName" = 'Bệnh nhân mẫu' LIMIT 1;`
    );

    if (patients && patients.length > 0) {
      const patientId = patients[0].id;

      await queryInterface.bulkDelete("TreatmentPlans", {
        idTreatmentPlan: patientId,
      });
    }
  },
};
