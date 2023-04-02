'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Doctor.hasMany(models.MemberOfClinic, {foreignKey:'idDoctor', sourceKey: 'id'});
      Doctor.hasMany(models.SharePatient, {foreignKey:'idSharedPatientOfDoctor', sourceKey: 'id'});
      Doctor.hasMany(models.Patient, {foreignKey:'idPatientOfDoctor', sourceKey: 'id'});
      Doctor.hasMany(models.Schedule, {foreignKey:'idDoctorSchedule', sourceKey: 'id'});
      Doctor.hasMany(models.Discussion, {foreignKey:'idDoctorSendMessage', sourceKey: 'id'});
    }
  }
  Doctor.init({
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    fullName: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    avatar: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    speciality:DataTypes.STRING,
    diploma: DataTypes.STRING,
    position :DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Doctor',
  });
  return Doctor;
};