'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Modal = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = exports.Modal = function Modal(_ref) {
    var isOpened = _ref.isOpened,
        content = _ref.content,
        style = _ref.style,
        handleCloseModal = _ref.handleCloseModal,
        buttonContent = _ref.buttonContent;

    var defaultStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
        },
        content: {
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            background: '#fff',
            overflow: 'auto',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px'
        }
    };

    if (!isOpened) {
        return null;
    }

    return _react2.default.createElement(
        'div',
        {
            className: 'overlay',
            style: style && style.overlay ? style.overlay : defaultStyles.overlay
        },
        _react2.default.createElement(
            'div',
            {
                className: 'modal',
                style: style && style.content ? style.content : defaultStyles.content
            },
            content,
            _react2.default.createElement(
                'button',
                {
                    onClick: handleCloseModal,
                    style: style && style.closeButton ? style.closeButton : defaultStyles.closeButton
                },
                buttonContent ? buttonContent : 'Close Modal'
            )
        )
    );
};

Modal.propTypes = {
    isOpened: _propTypes2.default.bool.isRequired,
    content: _propTypes2.default.string.isRequired,
    style: _propTypes2.default.object,
    handleCloseModal: _propTypes2.default.func.isRequired,
    buttonContent: _propTypes2.default.string.isRequired
};