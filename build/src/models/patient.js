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
  var Patient = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(Patient, _Model);
    var _super = _createSuper(Patient);
    function Patient() {
      (0, _classCallCheck2["default"])(this, Patient);
      return _super.apply(this, arguments);
    }
    (0, _createClass2["default"])(Patient, null, [{
      key: "associate",
      value:
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      function associate(models) {
        // define association here
        Patient.hasOne(models.History, {
          foreignKey: 'idHistory',
          sourceKey: 'id'
        });
        Patient.hasOne(models.ExtraOral, {
          foreignKey: 'idExtraOral',
          sourceKey: 'id'
        });
        Patient.hasOne(models.IntraOral, {
          foreignKey: 'idIntraOral',
          sourceKey: 'id'
        });
        Patient.hasOne(models.Radiography, {
          foreignKey: 'idRadiography',
          sourceKey: 'id'
        });
        Patient.hasOne(models.DiagnosisAndTreatment, {
          foreignKey: 'idDiagnosisAndTreatment',
          sourceKey: 'id'
        });
        Patient.hasMany(models.ListOfIssue, {
          foreignKey: 'idListOfIssue',
          sourceKey: 'id'
        });
        Patient.hasMany(models.TreatmentPlan, {
          foreignKey: 'idTreatmentPlan',
          sourceKey: 'id'
        });
        Patient.hasMany(models.TreatmentHistory, {
          foreignKey: 'idTreatmentHistory',
          sourceKey: 'id'
        });
        Patient.hasMany(models.SharePatient, {
          foreignKey: 'idSharedPatient',
          sourceKey: 'id'
        });
        Patient.hasMany(models.Schedule, {
          foreignKey: 'idPatientSchedule',
          sourceKey: 'id'
        });
        Patient.hasMany(models.Discussion, {
          foreignKey: 'idRoomDiscussionOfPatient',
          sourceKey: 'id'
        });
        Patient.belongsTo(models.Doctor, {
          foreignKey: {
            name: 'idPatientOfDoctor',
            allowNull: false
          },
          targetKey: 'id'
        });
        Patient.belongsTo(models.Clinic, {
          foreignKey: {
            name: 'idPatientOfClinic',
            allowNull: false
          },
          targetKey: 'id'
        });
      }
    }]);
    return Patient;
  }(Model);
  Patient.init({
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    idPatientOfDoctor: DataTypes.UUID,
    idPatientOfClinic: DataTypes.UUID,
    fullName: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    consulationDate: DataTypes.DATE,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING,
    chiefcomplaint: DataTypes.STRING,
    note: DataTypes.STRING,
    updateByDoctor: DataTypes.STRING
  }, {
    sequelize: sequelize,
    modelName: 'Patient'
  });
  return Patient;
};