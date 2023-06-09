import { useState } from "react";

const FeedbackItem = () => {
    const [rating, setRating] = useState(7);
    const [text, setText] = useState("This is an example of a feedback items");

    function handleClick() {
        setRating((prev) => {
            return prev + 1;
        })
    }
    return (
        <div className="card">
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default FeedbackItem