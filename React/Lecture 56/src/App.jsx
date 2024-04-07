import { useState } from "react";

function App() {
    let [data, setData] = useState(0);
    let count = 0;

    //    console.log(data);

    function increaseVal() {
        setData((data) => data + 1);
        // console.log("heelo++");
        // count++;
        // console.log(count);
    }
    
    function decreaseVal() {
        setData((data) => data - 1);
        // console.log("heelo--");
        // count--;
        // console.log(count);
    }

    return (
        <div>
            <h1>Counter</h1>
            <button onClick={increaseVal}>Increase</button>
            <h2>{data}</h2>
            <button onClick={decreaseVal}>Decrease</button>
        </div>
    );
}

export default App;
