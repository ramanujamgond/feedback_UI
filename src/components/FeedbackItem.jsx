import { useContext } from "react";
import PropType from "prop-types";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
    return (
        <Card reverse={true}>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className="close"><FaTimes color="#fff" /></button>
            <button onClick={() => editFeedback(item)} className="edit"><FaEdit color="#fff" /></button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propType = {
    item: PropType.object.isRequired,
}

export default FeedbackItem