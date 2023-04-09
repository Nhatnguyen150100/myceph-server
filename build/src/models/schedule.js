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
  var Schedule = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(Schedule, _Model);
    var _super = _createSuper(Schedule);
    function Schedule() {
      (0, _classCallCheck2["default"])(this, Schedule);
      return _super.apply(this, arguments);
    }
    (0, _createClass2["default"])(Schedule, null, [{
      key: "associate",
      value:
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      function associate(models) {
        // define association here
        Schedule.belongsTo(models.Doctor, {
          foreignKey: {
            name: 'idDoctorSchedule',
            allowNull: false
          },
          targetKey: 'id'
        });
        Schedule.belongsTo(models.Clinic, {
          foreignKey: {
            name: 'idClinicSchedule',
            allowNull: false
          },
          targetKey: 'id'
        });
        Schedule.belongsTo(models.Patient, {
          foreignKey: {
            name: 'idPatientSchedule',
            allowNull: false
          },
          targetKey: 'id'
        });
        Schedule.belongsTo(models.StatusOfClinic, {
          foreignKey: {
            name: 'idStatus',
            allowNull: false
          },
          targetKey: 'id'
        });
        Schedule.belongsTo(models.ServicesOfClinic, {
          foreignKey: {
            name: 'idService',
            allowNull: false
          },
          targetKey: 'id'
        });
        Schedule.belongsTo(models.RoomOfClinic, {
          foreignKey: {
            name: 'idRoom',
            allowNull: false
          },
          targetKey: 'id'
        });
      }
    }]);
    return Schedule;
  }(Model);
  Schedule.init({
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    idPatientSchedule: DataTypes.UUID,
    idDoctorSchedule: DataTypes.UUID,
    idClinicSchedule: DataTypes.UUID,
    appointmentDate: DataTypes.DATE,
    idStatus: DataTypes.UUID,
    idService: DataTypes.UUID,
    idRoom: DataTypes.UUID,
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME,
    note: DataTypes.STRING
  }, {
    sequelize: sequelize,
    modelName: 'Schedule'
  });
  return Schedule;
};