'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSweetalert = require('react-sweetalert2');

var _reactSweetalert2 = _interopRequireDefault(_reactSweetalert);

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReduxSweetAlert2 = function (_Component) {
    _inherits(ReduxSweetAlert2, _Component);

    function ReduxSweetAlert2(props) {
        _classCallCheck(this, ReduxSweetAlert2);

        var _this = _possibleConstructorReturn(this, (ReduxSweetAlert2.__proto__ || Object.getPrototypeOf(ReduxSweetAlert2)).call(this, props));

        _this.onClose = _this.onClose.bind(_this);
        return _this;
    }

    _createClass(ReduxSweetAlert2, [{
        key: 'onClose',
        value: function onClose() {
            if (this.props.sweetalert2.onClose != null) this.props.sweetalert2.onClose();
            this.props.closeAlert();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$sweetalert = this.props.sweetalert2,
                onClose = _props$sweetalert.onClose,
                restProps = _objectWithoutProperties(_props$sweetalert, ['onClose']);

            return _react2.default.createElement(_reactSweetalert2.default, _extends({ onClose: this.onClose }, restProps));
        }
    }]);

    return ReduxSweetAlert2;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        sweetalert2: state.sweetalert2
    };
};

ReduxSweetAlert2.propTypes = {
    sweetalert2: _propTypes2.default.object.isRequired,
    closeAlert: _propTypes2.default.func.isRequired
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
    closeAlert: _actions.closeAlert
})(ReduxSweetAlert2);