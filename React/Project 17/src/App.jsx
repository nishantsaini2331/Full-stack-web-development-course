import { useState } from "react";
import AllCards from "./component/AllCards";
import { data } from "./utilis/data";

function App() {
    const [val, setVal] = useState("");
    const [filterData, setFilterData] = useState(data);

    function filterHandler() {
        let res = data.filter((item) =>
            item.title.toLowerCase().includes(val.toLowerCase())
        );
        setFilterData(res);
    }
    return (
        <div className="bg-gray-300 text-center min-h-screen max-w-[100vw] overflow-x-hidden flex flex-col items-center">
            <h1 className="text-3xl pt-10 md:text-5xl">
                Raste Ka Maal Saste Mai
            </h1>
            <div className="mt-10    ">
                <input
                    className="p-3 rounded-tl-3xl rounded-bl-3xl focus:outline-none md:pr-[90px] md:pl-[20px]"
                    type="text"
                    placeholder="Kya chaiye ?..."
                    onChange={function (e) {
                        setVal(e.target.value);
                    }}
                />
                <button
                    className="p-3 px-7 bg-green-500 rounded-tr-3xl rounded-br-3xl md:px-[20px]"
                    onClick={filterHandler}
                >
                    Search
                </button>
            </div>
            {filterData.length <= 0 ? <h1 className="text-6xl mt-32">No item</h1> :  <AllCards data={filterData} />}
            
        </div>
    );
}

export default App;
