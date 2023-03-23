import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); //to fetch root from index.html from public->index.html

root.render(<App />);