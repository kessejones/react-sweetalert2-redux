'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.closeAlert = exports.openAlert = undefined;

var _type = require('./type');

function parseArgument(f1, f2, f3) {
    if (typeof f1 === 'string') {
        var payload = {
            title: f1
        };
        if (f2) payload.text = f2;
        if (f3) payload.type = f3;
        return payload;
    }
    return f1[0];
}

var openAlert = exports.openAlert = function openAlert() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return function (dispatch) {
        var payload = parseArgument(args);
        dispatch({
            type: _type.SHOW_SWAL,
            payload: payload
        });
    };
};

var closeAlert = exports.closeAlert = function closeAlert() {
    return function (dispatch) {
        dispatch({
            type: _type.HIDE_SWAL
        });
    };
};