"use strict";
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash("password", 10);

    await queryInterface.bulkInsert("Doctors", [
      {
        id: uuidv4(),
        email: "doctor@gmail.com",
        password: hashedPassword,
        fullName: "Dr. John Doe",
        gender: "Male",
        birthday: new Date("1980-05-15"),
        avatar: "https://res.cloudinary.com/dvzgiho5t/image/upload/v1748226058/Myceph/library/vfncxaenbvcp5dh2y2cm.jpg",
        phoneNumber: "123456789",
        specialty: "Cardiology",
        diploma: "Harvard Medical School",
        position: "Senior Doctor",
        description: "Specialist in heart and blood vessel diseases.",
        encryptionKey: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Doctors", null, {});
  }
};
