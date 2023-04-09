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
  var ExtraOral = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(ExtraOral, _Model);
    var _super = _createSuper(ExtraOral);
    function ExtraOral() {
      (0, _classCallCheck2["default"])(this, ExtraOral);
      return _super.apply(this, arguments);
    }
    (0, _createClass2["default"])(ExtraOral, null, [{
      key: "associate",
      value:
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      function associate(models) {
        // define association here
        ExtraOral.belongsTo(models.Patient, {
          foreignKey: {
            name: 'idExtraoral',
            allowNull: false
          },
          targetKey: 'id'
        });
      }
    }]);
    return ExtraOral;
  }(Model);
  ExtraOral.init({
    idExtraOral: DataTypes.UUID,
    faceAsymetry: DataTypes.STRING,
    chin: DataTypes.STRING,
    lipCompetence: DataTypes.STRING,
    lipPostureApart: DataTypes.INTEGER,
    normalNaresExposure: DataTypes.STRING,
    alarBaseWidth: DataTypes.STRING,
    lipWidth: DataTypes.STRING,
    verticalDimensions: DataTypes.STRING,
    overallProfile: DataTypes.STRING,
    lowerThirdProfile: DataTypes.STRING,
    nasolabialAngle: DataTypes.STRING,
    softTissuePogonion: DataTypes.STRING,
    mandibularPlaneAngle: DataTypes.STRING,
    obliqueAnalysis: DataTypes.STRING,
    teethDisplay: DataTypes.STRING,
    gingivalDisplayLevel: DataTypes.STRING,
    incisalDisplayMaxillary: DataTypes.STRING,
    incisalDisplayMandibular: DataTypes.STRING,
    smileArc: DataTypes.STRING,
    restPositionIncisalDisplay: DataTypes.STRING
  }, {
    sequelize: sequelize,
    modelName: 'ExtraOral'
  });
  return ExtraOral;
};