'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.all = exports.take = exports.spawn = exports.join = exports.cancel = exports.call = undefined;

var _effects = require('redux-saga/effects');

var sagaEffects = _interopRequireWildcard(_effects);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var call = sagaEffects.call,
    cancel = sagaEffects.cancel,
    join = sagaEffects.join,
    spawn = sagaEffects.spawn,
    take = sagaEffects.take;
exports.call = call;
exports.cancel = cancel;
exports.join = join;
exports.spawn = spawn;
exports.take = take;
var all = exports.all = sagaEffects.all || function (effects) {
  return effects;
};