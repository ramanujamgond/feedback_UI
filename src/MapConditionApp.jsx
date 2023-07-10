import React from 'react';

function App() {
    const title = "Blog Post";
    const body = "This is the body of blog post";
    const comments = [
        { id: 1, text: "Comment text 1" },
        { id: 2, text: "Comment text 2" },
        { id: 3, text: "Comment text 3" },
        { id: 4, text: "Comment text 4" },
        { id: 5, text: "Comment text 5" }
    ]

    const loading = false;
    if (loading) return <h1>Loading....</h1>

    const showComments = true;

    const commentsData = (
        <div className="comments">
            <h3>Comments {comments.length}</h3>
            <ul>
                {comments.map((comment) => {
                    return (
                        <li key={comment.id}>{comment.text}</li>
                    )
                })}
            </ul>
        </div>
    )

    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>


            {showComments && commentsData}

            {/* {showComments ? (
                <div className="comments">
                    <h3>Comments {comments.length}</h3>
                    <ul>
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id}>{comment.text}</li>
                            )
                        })}
                    </ul>
                </div>
            ) : null} */}
        </div>
    )
}

export default App;