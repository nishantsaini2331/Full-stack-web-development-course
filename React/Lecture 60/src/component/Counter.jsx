import { useEffect, useState } from "react";

function Counter() {
    const [val, setVal] = useState(0);

    useEffect(
        function () {
            console.log("useEffect called");

            // cleanup function
            //unmounting
            return () => {
                console.log("return statement executed");
            };
        },
        [val]
    );

    return (
        <div className="flex justify-center items-center gap-7 h-screen bg-black text-white">
            <button
                className="bg-gray-600 p-2 rounded-md"
                onClick={() => setVal((preVal) => preVal + 1)}
            >
                Increment
            </button>
            <h1>counter : {val}</h1>
            <button
                className="bg-gray-600 p-2 rounded-md"
                onClick={() => setVal((preVal) => preVal - 1)}
            >
                decrement
            </button>
        </div>
    );
}

export default Counter;
