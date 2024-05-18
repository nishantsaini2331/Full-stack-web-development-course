import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Resume from "./components/Resume";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
    return (
        <BrowserRouter>
            <Routes> 
                <Route path="/" element={<Home />}>
                    <Route path="/" element={<Body />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
