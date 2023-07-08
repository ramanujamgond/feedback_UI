import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import APP from "./App";
import reportWebVitals from "./reportWebVitals";

// const rootElement = document.getElementById("root");
// const root = ReactDOM.createRoot(rootElement);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <APP />
    </React.StrictMode>
);


reportWebVitals();