import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Body from "./components/Body";
import PageNotFound from "./components/PageNotFound";

// let router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Home />,
//         children : [
//             {
//                 path: "/",
//                 element: <Body/>,
//             },
//             {
//                 path: "/about",
//                 element: <About/>,
//             },
//             {
//                 path: "/contact",
//                 element: <Contact/>,
//             },
//             {
//                 path: "/project",
//                 element: <Project/>,
//             },
//             {
//                 path: "/resume",
//                 element: <Resume/>,
//             },
//             {
//                 path: "*",
//                 element: <PageNotFound/>,
//             },
//         ]
//     },

// ]);

let router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Home />}>
            <Route path="/" element={<Body />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
