"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    const [patients] = await queryInterface.sequelize.query(
      `SELECT id FROM "Patients" WHERE "Patients"."fullName" = 'Bệnh nhân mẫu' LIMIT 1;`
    );

    if (!patients || patients.length === 0) {
      throw new Error("Patient not found. Please run the patient seed first.");
    }

    const patientId = patients[0].id;
    const now = new Date();

    await queryInterface.bulkInsert("ListOfIssues", [
      {
        id: uuidv4(),
        idListOfIssue: patientId,
        issue: "Sai khớp cắn hạng II",
        treatmentObject: "Nắn chỉnh răng và điều chỉnh khớp cắn",
        treatmentMethod: "Mắc cài chỉnh nha và dây chun",
        priotized: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: uuidv4(),
        idListOfIssue: patientId,
        issue: "Chen chúc răng cửa hàm dưới",
        treatmentObject: "Giải phóng chen chúc",
        treatmentMethod: "Nhổ răng và sắp đều",
        priotized: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: uuidv4(),
        idListOfIssue: patientId,
        issue: "Cắn sâu",
        treatmentObject: "Tăng chiều cao cắn dọc",
        treatmentMethod: "Dụng cụ nâng cắn và kỹ thuật làm lún răng",
        priotized: false,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: uuidv4(),
        idListOfIssue: patientId,
        issue: "Hàm trên hẹp",
        treatmentObject: "Mở rộng cung hàm",
        treatmentMethod: "Dụng cụ nong hàm",
        priotized: false,
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

      await queryInterface.bulkDelete("ListOfIssues", {
        idListOfIssue: patientId,
      });
    }
  },
};
