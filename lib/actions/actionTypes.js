'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by rouven on 13.06.17.
 */

var PREFIX = '@@wikom-wizard/';

var INITIALIZE = exports.INITIALIZE = PREFIX + 'INITIALIZE';
var DESTROY = exports.DESTROY = PREFIX + 'DESTROY';
var STEP_FORWARD = exports.STEP_FORWARD = PREFIX + 'STEP_FORWARD';
var STEP_BACK = exports.STEP_BACK = PREFIX + 'STEP_BACK';
var SET_ERROR = exports.SET_ERROR = PREFIX + 'SET_ERROR';
var STEP_FORWARD_PRESERVING_ERRORS = exports.STEP_FORWARD_PRESERVING_ERRORS = 'STEP_FORWARD_PRESERVING_ERRORS';