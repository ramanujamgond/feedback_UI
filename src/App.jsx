import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/About";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";

function App() {

    return (
        <>
            {/* <Header text={"This is Heading"} /> */}
            <FeedbackProvider>
                <Router>
                    <Header />
                    <div className="container">
                        <Routes>
                            <Route exact path="/" element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                </>
                            }>
                            </Route>
                            <Route path="/about" element={<AboutPage />} />
                            {/* <Route path="/post/:id/:name" element={<Post />} /> */}
                            <Route path="/post/*" element={<Post />} />
                        </Routes>
                        <AboutIconLink />
                    </div>
                </Router>
            </FeedbackProvider>
        </>
    )
}

export default App;
