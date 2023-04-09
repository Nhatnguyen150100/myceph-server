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
  var SharePatient = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(SharePatient, _Model);
    var _super = _createSuper(SharePatient);
    function SharePatient() {
      (0, _classCallCheck2["default"])(this, SharePatient);
      return _super.apply(this, arguments);
    }
    (0, _createClass2["default"])(SharePatient, null, [{
      key: "associate",
      value:
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      function associate(models) {
        // define association here
        SharePatient.belongsTo(models.Patient, {
          foreignKey: {
            name: 'idSharedPatient',
            allowNull: false
          },
          targetKey: 'id'
        });
        SharePatient.belongsTo(models.Doctor, {
          foreignKey: {
            name: 'idSharedPatientOfDoctor',
            allowNull: true
          },
          targetKey: 'id'
        });
        SharePatient.belongsTo(models.Clinic, {
          foreignKey: {
            name: 'idSharedPatientOfClinic',
            allowNull: true
          },
          targetKey: 'id'
        });
        SharePatient.belongsTo(models.Doctor, {
          foreignKey: {
            name: 'idOwnerDoctor',
            allowNull: true
          },
          targetKey: 'id'
        });
      }
    }]);
    return SharePatient;
  }(Model);
  SharePatient.init({
    idSharedPatient: DataTypes.UUID,
    idSharedPatientOfDoctor: DataTypes.UUID,
    idSharedPatientOfClinic: DataTypes.UUID,
    idOwnerDoctor: DataTypes.UUID,
    roleOfOwnerDoctor: DataTypes.STRING
  }, {
    sequelize: sequelize,
    modelName: 'SharePatient'
  });
  return SharePatient;
};