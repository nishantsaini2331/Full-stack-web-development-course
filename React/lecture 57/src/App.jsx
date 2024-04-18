import { useState } from "react";
import {Product} from "./Product";
function App() {
    const [data, setData] = useState(4);

    function handleIncrease() {
        setData((preValue) => preValue + 1);
    }

    return (
        <div>
            {data}
            <button onClick={handleIncrease}>increase</button>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    );
}

export function Hello(){
    return <h1 style={{backgroundColor:"red" ,marginTop:"60px"}}>Helllo</h1>
}

export default App;
