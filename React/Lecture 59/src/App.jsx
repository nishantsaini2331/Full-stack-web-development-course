import { useState } from "react";

function App() {
    const [data, setData] = useState({ email: "", password: "" });

    function formSubmit(event) {
        event.preventDefault();
        console.log(data);
    }

    function handleForm(event) {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    }
    return (
        <form>
            <input
                name="email"
                type="text"
                placeholder="email"
                onChange={handleForm}
                value={data.email}
            />
            <br />
            <br />
            <input
                name="password"
                type="password"
                placeholder="password"
                onChange={handleForm}
                value={data.password}
            />
            <br />
            <br />
            <button onClick={formSubmit}>Login</button>
        </form>
    );
}

export default App;
