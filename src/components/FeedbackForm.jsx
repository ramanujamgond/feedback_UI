import React, { useState } from 'react';
import RatingSelect from './RatingSelect';
import Card from './shared/Card';
import Button from './shared/Button';

const FeedbackForm = ({ handleAdd }) => {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');


    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters');
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text: text,
                rating: rating
            }
            handleAdd(newFeedback);
            setText('');
        }
    }

    return (
        <React.Fragment>
            <Card>
                <form onSubmit={handleSubmit}>
                    <h2>How would you rate your service with us?</h2>
                    {/* @todo - rating select component */}
                    <RatingSelect select={(rating) => setRating(rating)} />
                    <div className="input-group">
                        <input value={text} onChange={handleTextChange} type="text" placeholder='Write a review' />
                        <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                    </div>
                    {message && <div className='message'>{message}</div>}
                </form>
            </Card>
        </React.Fragment>
    )
}

export default FeedbackForm