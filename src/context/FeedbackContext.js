import FeedbackData from "../data/FeedbackData";
import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(FeedbackData);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = parseInt(uuidv4());
        setFeedback([newFeedback, ...feedback]);
    }

    // delete feedback
    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((items) => items.id !== id));
    }


    // update feedback item
    const updateFeedback = (id, updItem) => {
        // console.log(id, updItem);
        setFeedback(feedback.map((item) => item.id === id ? {
            ...item, ...updItem
        } : item))
    }

    // set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    return (
        <FeedbackContext.Provider value={{
            feedback: feedback,
            feedbackEdit: feedbackEdit,
            deleteFeedback: deleteFeedback,
            addFeedback: addFeedback,
            editFeedback: editFeedback,
            updateFeedback: updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;