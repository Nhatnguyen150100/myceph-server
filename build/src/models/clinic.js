'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var _require = require('sequelize'),
  Model = _require.Model;
module.exports = function (sequelize, DataTypes) {
  var Clinic = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(Clinic, _Model);
    var _super = _createSuper(Clinic);
    function Clinic() {
      (0, _classCallCheck2["default"])(this, Clinic);
      return _super.apply(this, arguments);
    }
    (0, _createClass2["default"])(Clinic, null, [{
      key: "associate",
      value:
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      function associate(models) {
        // define association here
        Clinic.hasMany(models.MemberOfClinic, {
          foreignKey: 'idClinic',
          sourceKey: 'id'
        });
        Clinic.hasMany(models.SharePatient, {
          foreignKey: 'idSharedPatientOfClinic',
          sourceKey: 'id'
        });
        Clinic.hasMany(models.Patient, {
          foreignKey: 'idPatientOfClinic',
          sourceKey: 'id'
        });
        Clinic.hasMany(models.LibraryImageClinic, {
          foreignKey: 'idClinicImage',
          sourceKey: 'id'
        });
        Clinic.hasMany(models.RoomOfClinic, {
          foreignKey: 'idClinicRoom',
          sourceKey: 'id'
        });
        Clinic.hasMany(models.ServicesOfClinic, {
          foreignKey: 'idClinicService',
          sourceKey: 'id'
        });
        Clinic.hasMany(models.StatusOfClinic, {
          foreignKey: 'idClinicStatus',
          sourceKey: 'id'
        });
        Clinic.hasMany(models.Schedule, {
          foreignKey: 'idClinicSchedule',
          sourceKey: 'id'
        });
      }
    }]);
    return Clinic;
  }(Model);
  Clinic.init({
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    nameClinic: DataTypes.STRING,
    emailClinic: DataTypes.STRING,
    phoneNumberClinic: DataTypes.STRING,
    avatarClinic: DataTypes.STRING,
    addressClinic: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize: sequelize,
    modelName: 'Clinic'
  });
  return Clinic;
};