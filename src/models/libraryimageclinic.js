'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LibraryImageClinic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      LibraryImageClinic.belongsTo(models.Clinic, {foreignKey: {name: 'idClinicImage', allowNull: false}, targetKey: 'id'});
    }
  }
  LibraryImageClinic.init({
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    idClinicImage: DataTypes.UUID,
    linkImage: DataTypes.UUID,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LibraryImageClinic',
  });
  return LibraryImageClinic;
};