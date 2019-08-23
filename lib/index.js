'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHashHistory = exports.createBrowserHistory = exports.router = undefined;

var _history = require('history');

var _router2 = require('./router');

var _router3 = _interopRequireDefault(_router2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.router = _router3.default;
exports.createBrowserHistory = _history.createBrowserHistory;
exports.createHashHistory = _history.createHashHistory;
