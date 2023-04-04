import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Card from "./shared/Card";
import PropTypes from 'prop-types';

const FeedbackItem = ({ item, handleDelete }) => {
    // const [rating, setRating] = useState(7);
    // const [text, setText] = useState('This is an example of a feedback item.');

    // const handleClick = () => {
    //     setRating((prev) => {
    //         // console.log(prev);
    //         return prev + 1
    //     });
    // }


    const handleClick = (id) => {
        console.log(id);
    }

    return (
        <React.Fragment>
            <Card>
                <div className="num-display">{item?.rating}</div>
                <button onClick={() => handleDelete(item.id)} className="close">
                    <FaTimes color='purple' />
                </button>
                <div className="text-display">{item?.text}</div>
                {/* <button onClick={handleClick}>Click</button>  */}
            </Card>
        </React.Fragment>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}


export default FeedbackItem