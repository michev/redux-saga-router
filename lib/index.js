'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _history = require('history');

Object.defineProperty(exports, 'createBrowserHistory', {
  enumerable: true,
  get: function get() {
    return _history.createBrowserHistory;
  }
});
Object.defineProperty(exports, 'createHashHistory', {
  enumerable: true,
  get: function get() {
    return _history.createHashHistory;
  }
});

var _router = require('./router');

Object.defineProperty(exports, 'router', {
  enumerable: true,
  get: function get() {
    return _router.router;
  }
});