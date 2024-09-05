import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import FunctionCom from "./Components/FunctionCom";
import ClassCom from "./Components/ClassCom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route path="/" element={<FunctionCom name="nishant"/>} />
                <Route path="/classCom" element={<ClassCom name="codethread"/>} />
                <Route path="*" element={<h1>Page not found 404...</h1>}/>
            </Route>
        </Routes>
    );
}

export default App;
