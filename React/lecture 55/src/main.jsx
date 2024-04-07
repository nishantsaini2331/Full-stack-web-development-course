import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";


import "./index.css";

let shoeData = [
    {
        id:1,
        title: "Nike shoes",
        price: "599",
    },
    {
        id:2,
        title: "Abibas shoes",
        price: "899",
    },
    {
        id:3,
        title: "lakhani shoes",
        price: "999",
    },
    {
        id:4,
        title: "Goldstar shoes",
        price: "1299",
    },
];

ReactDOM.createRoot(document.getElementById("root")).render(<App shoeData={shoeData}/>);
