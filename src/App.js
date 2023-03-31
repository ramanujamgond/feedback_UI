import React from "react";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

function App() {
    return (
        <React.Fragment>
            {/* <Header text="Hello World" /> */}
            {/* <Header bgColor='red' textColor='blue' /> */}
            <Header />
            <div className="container">
                <FeedbackItem />
            </div>
        </React.Fragment>
    )
}

export default App