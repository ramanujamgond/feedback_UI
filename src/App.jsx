import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const addFeedback = (newFeedback) => {
        newFeedback.id = parseInt(uuidv4());
        setFeedback([newFeedback, ...feedback]);
    }

    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((items) => items.id !== id));
    }

    return (
        <>
            {/* <Header text={"This is Heading"} /> */}
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={
                            <>
                                <FeedbackForm handleAdd={addFeedback} />
                                <FeedbackStats feedback={feedback} />
                                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                            </>
                        }>
                        </Route>
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/post/:id/:name" element={<Post />} />
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </>
    )
}

export default App;
