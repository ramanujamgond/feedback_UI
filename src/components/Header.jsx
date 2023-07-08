import PropTypes from 'prop-types';

function Header({ text, bgColor, textColor }) {

    const headerStyles = {
        backgroundColor: bgColor,
        textColor: textColor
    }
    return (
        <div className='container' style={headerStyles}>
            <h2>{text}</h2>
        </div>
    )
}

Header.defaultProps = {
    text: "Feedback UI",
    bgColor: "rgba(0, 0, 0, 0.4)",
    textColor: "#ff6a95"
}

Header.propsTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header