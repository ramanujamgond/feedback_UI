import PropType from "prop-types";

const Card = ({ children, reverse }) => {
    return (
        // <div className={`card ${reverse && "reverse"}`}>{children}</div>
        <div className="card" style={{
            backgroundColor: reverse ? "rgba(0, 0, 0, 0.4)" : "#fff",
            color: reverse ? "#fff" : "#000"
        }}>{children}</div>
    )
}

Card.defaultProps = {
    reverse: false,
}

Card.propType = {
    children: PropType.node.isRequired,
    reverse: PropType.bool.isRequired,
}

export default Card