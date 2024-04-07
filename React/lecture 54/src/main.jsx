import React from "react";
import ReactDOM,* as Hello from "react-dom/client";
// default import
// import Nishant from "./Nishant";
import './index.css'
// named import
import { Nishant as CodeThread } from "./Nishant";

let root = Hello.createRoot(document.getElementById("root"));
root.render(<CodeThread/>)
// root.render(<Nishant></Nishant>)
