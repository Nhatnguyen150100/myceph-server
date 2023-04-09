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
  var IntraOral = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(IntraOral, _Model);
    var _super = _createSuper(IntraOral);
    function IntraOral() {
      (0, _classCallCheck2["default"])(this, IntraOral);
      return _super.apply(this, arguments);
    }
    (0, _createClass2["default"])(IntraOral, null, [{
      key: "associate",
      value:
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      function associate(models) {
        // define association here
        IntraOral.belongsTo(models.Patient, {
          foreignKey: {
            name: 'idIntraoral',
            allowNull: false
          },
          targetKey: 'id'
        });
      }
    }]);
    return IntraOral;
  }(Model);
  IntraOral.init({
    idIntraOral: DataTypes.UUID,
    oralHygiene: DataTypes.STRING,
    dentition: DataTypes.STRING,
    caries: DataTypes.STRING,
    missing: DataTypes.STRING,
    wearingTeeth: DataTypes.STRING,
    detalAldevelopment: DataTypes.STRING,
    otherProblems: DataTypes.STRING,
    archForm: DataTypes.STRING,
    rightCanine: DataTypes.STRING,
    rightMolar: DataTypes.STRING,
    leftCanine: DataTypes.STRING,
    leftMolar: DataTypes.STRING,
    overjet: DataTypes.INTEGER,
    overbite: DataTypes.INTEGER,
    curveOfSpee: DataTypes.INTEGER,
    cant: DataTypes.STRING,
    posteriorRight: DataTypes.STRING,
    posteriorLeft: DataTypes.STRING,
    upperMidline: DataTypes.STRING,
    lowerMidline: DataTypes.STRING,
    deviate: DataTypes.STRING,
    crCoDiscrepancy: DataTypes.STRING,
    maximumMouthOpening: DataTypes.INTEGER,
    guidanceOnProtrusion: DataTypes.STRING,
    guidanceOnRight: DataTypes.STRING,
    guidanceOnLeft: DataTypes.STRING,
    musculature: DataTypes.STRING,
    swallowingPattern: DataTypes.STRING,
    historyOfTMD: DataTypes.STRING
  }, {
    sequelize: sequelize,
    modelName: 'IntraOral'
  });
  return IntraOral;
};