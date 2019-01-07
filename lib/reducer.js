'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { ...initialState };
    var action = arguments[1];

    switch (action.type) {
        case _type.SHOW_SWAL:
            return {
                ...state,
                ...action.payload,
                show: true
            };
        case _type.HIDE_SWAL:
            return {
                ...initialState
            };
        default:
            return {
                ...initialState
            };
    }
};

var _type = require('./type');

var initialState = {
    show: false,
    title: null,
    titleText: null,
    html: null,
    text: null,
    type: null,
    footer: null,
    backdrop: true,
    toast: false,
    target: 'body',
    input: null,
    width: null,
    padding: null,
    background: null,
    position: 'center',
    grow: false,
    customClass: null,
    timer: null,
    animation: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    confirmButtonColor: null,
    cancelButtonColor: null,
    confirmButtonClass: null,
    cancelButtonClass: null,
    confirmButtonAriaLabel: '',
    cancelButtonAriaLabel: '',
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusCancel: false,
    showCloseButton: false,
    closeButtonAriaLabel: 'Close this dialog',
    showLoaderOnConfirm: false,
    preConfirm: null,
    imageUrl: null,
    imageWidth: null,
    imageHeight: null,
    imageAlt: '',
    imageClass: null,
    inputPlaceholder: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: null,
    validationMesage: null,
    inputClass: null,
    progressSteps: [],
    currentProgressStep: null,
    progressStepsDistance: '40px',
    onBeforeOpen: null,
    onOpen: null,
    onClose: null,
    onAfterClose: null,
    onConfirm: null,
    showLoading: false
};