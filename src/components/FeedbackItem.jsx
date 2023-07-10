import PropType from "prop-types";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

const FeedbackItem = ({ item, handleDelete }) => {
    return (
        <Card reverse={true}>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className="close"><FaTimes color="#fff" /></button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propType = {
    item: PropType.object.isRequired,
}

export default FeedbackItem