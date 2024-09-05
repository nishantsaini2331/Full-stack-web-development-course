import React, { memo, useCallback, useMemo, useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    const CalSumEven = useMemo(function () {
        console.log("inside fun");
        let c = 0;
        for (let i = 0; i <= 10; i = i + 2) {
            c += i;
        }

        return c;
    }, []);

    // console.log(CalSumEven);



    // un-memoized 
    // function hello() {
    //     console.log("from hello fun");
    // }

    //memoized

    const hello = useCallback(() => {
        console.log("from hello fun");
    } , []);

    return (
        <div>
            <h1>App - hello</h1>
            <p>{count}</p>
            <button onClick={() => setCount((prev) => prev + 1)}>click</button>
            <Child handleClick={hello} />
        </div>
    );
}

const Child = memo(({handleClick}) => {
    console.log("child");
    
    return (
        <div>
            <h4>Mai child hu App ka</h4> 
            <button onClick={handleClick}>Click child btn</button>
        </div>
    );
});

export default App;
