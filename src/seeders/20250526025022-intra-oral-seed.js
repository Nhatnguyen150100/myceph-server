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
      "IntraOrals",
      {
        oralHygiene: "Good",
        dentition: "Primary",
        caries: "Không có",
        missing: "Răng số 18, 28",
        wearingTeeth: "Không có",
        detalAldevelopment: "Phát triển đầy đủ",
        otherProblems: "Không có",
        archForm: "Ovoid",
        rightCanine: "I",
        rightMolar: "I",
        leftCanine: "II",
        leftMolar: "I",
        overjet: "3mm",
        overbite: "30%",
        curveOfSpee: "Nhẹ",
        cant: "Không có",
        posteriorRight: "No",
        posteriorLeft: "No",
        upperMidline: "Coincident",
        lowerMidline: "Coincident",
        deviate: "1",
        crCoDiscrepancy: "No",
        maximumMouthOpening: "45mm",
        guidanceOnProtrusion: "Hướng dẫn răng cửa",
        guidanceOnRight: "Hướng dẫn răng nanh",
        guidanceOnLeft: "Hướng dẫn răng nanh",
        musculature: "Bình thường",
        swallowingPattern: "Bình thường",
        historyOfTMD: "Không có",
        updatedAt: new Date(),
      },
      {
        idIntraOral: patientId,
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
        "IntraOrals",
        {
          oralHygiene: null,
          dentition: null,
          caries: null,
          missing: null,
          wearingTeeth: null,
          detalAldevelopment: null,
          otherProblems: null,
          archForm: null,
          rightCanine: null,
          rightMolar: null,
          leftCanine: null,
          leftMolar: null,
          overjet: null,
          overbite: null,
          curveOfSpee: null,
          cant: null,
          posteriorRight: null,
          posteriorLeft: null,
          upperMidline: null,
          lowerMidline: null,
          deviate: null,
          crCoDiscrepancy: null,
          maximumMouthOpening: null,
          guidanceOnProtrusion: null,
          guidanceOnRight: null,
          guidanceOnLeft: null,
          musculature: null,
          swallowingPattern: null,
          historyOfTMD: null,
          updatedAt: new Date(),
        },
        {
          idIntraOral: patientId,
        }
      );
    }
  },
};
