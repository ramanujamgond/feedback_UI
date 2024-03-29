import { useNavigate, Routes, Route } from "react-router-dom";

const Post = () => {

    // if (status === 404) {
    //     return <Navigate to="/notfound" />
    // }

    const navigate = useNavigate();

    const onClick = () => {
        console.log("Hello");
        navigate('/about');
    }

    return (
        <div>
            <h1>Post</h1>
            <button onClick={onClick}>Click</button>
            <Routes>
                <Route path="/show" element={<h1>Hello World</h1>} />
            </Routes>
        </div>
    )
}

export default Post