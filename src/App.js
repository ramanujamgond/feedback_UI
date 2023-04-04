import { useState } from "react";
import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
    const [feedBack, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        // console.log(newFeedback);
        setFeedback([newFeedback, ...feedBack])
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you shure you want to delete?')) {
            setFeedback(feedBack.filter((item) => item.id !== id))
        }
    }
    return (
        <React.Fragment>
            {/* <Header text="Hello World" /> */}
            {/* <Header bgColor='red' textColor='blue' /> */}
            <Header />
            <div className="container">
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedBack={feedBack} />
                <FeedBackList feedBack={feedBack} handleDelete={deleteFeedback} />
            </div>
        </React.Fragment>
    )
}

export default App