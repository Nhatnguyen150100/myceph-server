"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = toISODateString;
function toISODateString(dateObject) {
  var result = '';
  if (dateObject && typeof dateObject.getMonth === 'function') {
    var month = '' + (dateObject.getMonth() + 1);
    var day = '' + dateObject.getDate();
    var year = dateObject.toISOString().substring(0, 4);
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    result = "".concat(year, "-").concat(month, "-").concat(day);
  }
  return result;
}