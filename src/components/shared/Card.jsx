import React, { children } from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, reverse }) => {

    {/* return (<div className={`card ${reverse && 'reverse'}`}>{children}</div>) */ }

    return (
        <React.Fragment>
            <div className='card' style={{ backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff', color: reverse ? `#fff` : '#000' }}>
                {children}
            </div>
        </React.Fragment>
    )
}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}


export default Card