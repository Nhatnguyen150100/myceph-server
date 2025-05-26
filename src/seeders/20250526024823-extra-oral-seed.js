"use strict";

const { create } = require("lodash");

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
      "ExtraOrals",
      {
        faceAsymetry: "Left Deviation",
        chin: "Symmetric",
        lipCompetence: "Đóng hoàn toàn",
        lipPostureApart: "2mm",
        normalNaresExposure: "High",
        alarBaseWidth: "Narrower",
        lipWidth: "Equal",
        verticalDimensions: "Harmony",
        overallProfile: "Straight",
        lowerThirdProfile: "Concave",
        nasolabialAngle: "Right",
        softTissuePogonion: "Normal",
        mandibularPlaneAngle: "Pronounced",
        obliqueAnalysis: "Bình thường",
        teethDisplay: "Yes",
        gingivalDisplayLevel: "Level I",
        incisalDisplayMaxillary: "12",
        incisalDisplayMandibular: "12",
        smileArc: "+/-",
        restPositionIncisalDisplay: "No",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        idExtraOral: patientId,
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
        "ExtraOrals",
        {
          faceAsymetry: null,
          chin: null,
          lipCompetence: null,
          lipPostureApart: null,
          normalNaresExposure: null,
          alarBaseWidth: null,
          lipWidth: null,
          verticalDimensions: null,
          overallProfile: null,
          lowerThirdProfile: null,
          nasolabialAngle: null,
          softTissuePogonion: null,
          mandibularPlaneAngle: null,
          obliqueAnalysis: null,
          teethDisplay: null,
          gingivalDisplayLevel: null,
          incisalDisplayMaxillary: null,
          incisalDisplayMandibular: null,
          smileArc: null,
          restPositionIncisalDisplay: null,
          updatedAt: new Date(),
        },
        {
          idExtraOral: patientId,
        }
      );
    }
  },
};
