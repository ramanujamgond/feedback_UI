import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, version, type, isDisabled }) => {
    return (
        <React.Fragment>
            <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
                {children}
            </button>
        </React.Fragment>
    )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    disabled: false
}

Button.prototype = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button