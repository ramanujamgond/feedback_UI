// import FeedbackData from "../data/FeedbackData";
// import { v4 as uuidv4 } from "uuid";
import { createContext, useState, useEffect } from "react";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedBack();
    }, [])

    // fetch feedback
    const fetchFeedBack = async () => {
        const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`);
        const data = await response.json();
        setFeedback(data);
        setIsLoading(false);
    }

    // add feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('http://localhost:5000/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json();

        setFeedback([data, ...feedback]);
    }

    // delete feedback
    const deleteFeedback = async (id) => {
        if (window.confirm("Are you syre you want to delete")) {
            await fetch(`http://localhost:5000/feedback/${id}`, { method: 'DELETE' })

            setFeedback(feedback.filter((items) => items.id !== id));
        }
    }


    // update feedback item
    const updateFeedback = async (id, updItem) => {
        // console.log(id, updItem);

        const response = await fetch(`http://localhost:5000/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json();

        setFeedback(feedback.map((item) => item.id === id ? {
            ...item, ...data
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
            isLoading: isLoading,
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