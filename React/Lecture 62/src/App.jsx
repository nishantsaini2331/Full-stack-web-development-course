import { useContext, useEffect, useState } from "react";
import userContext from "./utils/Context";
function App() {
    let [username, setUsername] = useState("");

    useEffect(() => {
        //data fetching
        let data = "nishant";
        setUsername(data);
    }, []);

    return (
        <userContext.Provider value={{username, channelName : "codethread "}}>
        <div style={{ border: "2px solid red", padding: "20px" }}>
            <h1>App</h1>
            <GrandParent/>
        </div>
        </userContext.Provider>
    );
}

export default App;

function GrandParent() {
    return (
        <div style={{ border: "2px solid green", padding: "20px" }}>
            <h1>GrandParent</h1>
            <Parent />
        </div>
    );
}

function Parent() {
    return (
        <div style={{ border: "2px solid black", padding: "20px" }}>
            <h1>Parent</h1>
            <Child />
        </div>
    );
}

function Child() {

    let {username ,channelName}  = useContext(userContext)

    return (
        <div style={{ border: "2px solid blue", padding: "20px" }}>
            <h1>Child</h1>
            <h2>{channelName}</h2>
        </div>
    );
}
