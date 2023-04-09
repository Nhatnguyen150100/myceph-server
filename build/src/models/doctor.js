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
  var Doctor = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(Doctor, _Model);
    var _super = _createSuper(Doctor);
    function Doctor() {
      (0, _classCallCheck2["default"])(this, Doctor);
      return _super.apply(this, arguments);
    }
    (0, _createClass2["default"])(Doctor, null, [{
      key: "associate",
      value:
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      function associate(models) {
        // define association here
        Doctor.hasMany(models.MemberOfClinic, {
          foreignKey: 'idDoctor',
          sourceKey: 'id'
        });
        Doctor.hasMany(models.SharePatient, {
          foreignKey: 'idSharedPatientOfDoctor',
          sourceKey: 'id'
        });
        Doctor.hasMany(models.Patient, {
          foreignKey: 'idPatientOfDoctor',
          sourceKey: 'id'
        });
        Doctor.hasMany(models.Schedule, {
          foreignKey: 'idDoctorSchedule',
          sourceKey: 'id'
        });
        Doctor.hasMany(models.Discussion, {
          foreignKey: 'idDoctorSendMessage',
          sourceKey: 'id'
        });
      }
    }]);
    return Doctor;
  }(Model);
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
    speciality: DataTypes.STRING,
    diploma: DataTypes.STRING,
    position: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize: sequelize,
    modelName: 'Doctor'
  });
  return Doctor;
};