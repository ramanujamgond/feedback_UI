import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((items) => items.id !== id));
    }

    return (
        <>
            {/* <Header text={"This is Heading"} /> */}
            <Header />
            <div className="container">
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </div>
        </>
    )
}

export default App;
