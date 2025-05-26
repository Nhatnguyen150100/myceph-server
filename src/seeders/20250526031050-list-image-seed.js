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

    await queryInterface.bulkInsert("LibraryImagePatients", [
      // X-RAY
      {
        id: "5ea9baa5-74e5-4d3b-b11b-d50d6cdec1f0",
        idPatientImage: patientId,
        linkImage: "https://res.cloudinary.com/dvzgiho5t/image/upload/v1748220399/Myceph/library/at3zigjuxfmhwjpk3yw3.webp",
        typeImage: 1,
        consultationDate: new Date("2025-05-10"),
        createdAt: now,
        updatedAt: now,
      },
      {
        id: uuidv4(),
        idPatientImage: patientId,
        linkImage: "https://res.cloudinary.com/dvzgiho5t/image/upload/v1685112570/Myceph/library/xuwotmx7uawrven9giuw.jpg",
        typeImage: 2,
        consultationDate: new Date("2025-05-10"),
        createdAt: now,
        updatedAt: now,
      },
      {
        id: uuidv4(),
        idPatientImage: patientId,
        linkImage: "https://res.cloudinary.com/dvzgiho5t/image/upload/v1685112583/Myceph/library/fktyn8taepxxfhhn9oii.jpg",
        typeImage: 3,
        consultationDate: new Date("2025-05-10"),
        createdAt: now,
        updatedAt: now,
      },
      // FACE
      {
        id: uuidv4(),
        idPatientImage: patientId,
        linkImage: "https://res.cloudinary.com/dvzgiho5t/image/upload/v1682441258/Myceph/library/uq7xvmacauiej2fjxrr9.jpg",
        typeImage: 5,
        consultationDate: new Date("2025-05-10"),
        createdAt: now,
        updatedAt: now,
      },
      {
        id: uuidv4(),
        idPatientImage: patientId,
        linkImage: "https://res.cloudinary.com/dvzgiho5t/image/upload/v1682441266/Myceph/library/vhssbts96fggeuvkfec4.jpg",
        typeImage: 6,
        consultationDate: new Date("2025-05-10"),
        createdAt: now,
        updatedAt: now,
      },
      {
        id: uuidv4(),
        idPatientImage: patientId,
        linkImage: "https://res.cloudinary.com/dvzgiho5t/image/upload/v1682441262/Myceph/library/nmpvy98jjleuwtchcuer.jpg",
        typeImage: 7,
        consultationDate: new Date("2025-05-10"),
        createdAt: now,
        updatedAt: now,
      },
      {
        id: uuidv4(),
        idPatientImage: patientId,
        linkImage: "https://res.cloudinary.com/dvzgiho5t/image/upload/v1748228117/Myceph/library/iggsnthcj490vqpsbv4k.png",
        typeImage: 8,
        consultationDate: new Date("2025-05-10"),
        createdAt: now,
        updatedAt: now,
      },
      // INTRA_ORAL
      {
        id: uuidv4(),
        idPatientImage: patientId,
        linkImage: "https://res.cloudinary.com/dvzgiho5t/image/upload/v1685112683/Myceph/library/mq8tql3azyk92scnjoqt.jpg",
        typeImage: 10,
        consultationDate: new Date("2025-05-10"),
        createdAt: now,
        updatedAt: now,
      },
      {
        id: uuidv4(),
        idPatientImage: patientId,
        linkImage: "https://res.cloudinary.com/dvzgiho5t/image/upload/v1689324951/Myceph/library/czpe7esnou8ejerqsqic.jpg",
        typeImage: 11,
        consultationDate: new Date("2025-05-10"),
        createdAt: now,
        updatedAt: now,
      },
      {
        id: uuidv4(),
        idPatientImage: patientId,
        linkImage: "https://res.cloudinary.com/dvzgiho5t/image/upload/v1689324987/Myceph/library/cd9yvr9srwn23ikpx10k.jpg",
        typeImage: 12,
        consultationDate: new Date("2025-05-10"),
        createdAt: now,
        updatedAt: now,
      },
      {
        id: uuidv4(),
        idPatientImage: patientId,
        linkImage: "https://res.cloudinary.com/dvzgiho5t/image/upload/v1689324970/Myceph/library/z3iqhuwiuhljqqwl9zm1.jpg",
        typeImage: 13,
        consultationDate: new Date("2025-05-10"),
        createdAt: now,
        updatedAt: now,
      },
      {
        id: uuidv4(),
        idPatientImage: patientId,
        linkImage: "https://res.cloudinary.com/dvzgiho5t/image/upload/v1748228417/Myceph/library/r1gfsrvuux85eutdyfz8.jpg",
        typeImage: 14,
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

      await queryInterface.bulkDelete("LibraryImagePatients", {
        idPatientImage: patientId,
      });
    }
  },
};
