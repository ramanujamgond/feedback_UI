import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App";
// import AppBackup from "./AppBackup";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
        {/* <AppBackup /> */}
    </React.StrictMode>
)