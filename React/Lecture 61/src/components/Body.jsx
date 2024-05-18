import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Body() {
    const [data, setData] = useState({ email: "", password: "" });
    let navigation = useNavigate();
    let defaultData = {
        email: "react@gmail.com",
        password: 1234,
    };

    function handleSubmit(e) {
        e.preventDefault();
        let { password, email } = data;
        console.log(password, email);
        if (password == defaultData.password && email == defaultData.email) {
            setTimeout(() => {
                navigation("/project");
            }, 3000);
        } else {
            console.log(" wrong Credential ");
        }
    }

    return (
        <div className="w-screen  flex flex-col justify-center items-center bg-slate-300">
            <section className="text-5xl mt-52 text-center">
                <h1>Body</h1>
            </section>

            <form>
                <input
                    type="email"
                    placeholder="email..."
                    onChange={(e) =>
                        setData((preValue) => ({
                            ...preValue,
                            email: e.target.value,
                        }))
                    }
                />
                <br />
                <input
                    type="password"
                    placeholder="password"
                    onChange={(e) =>
                        setData((preValue) => ({
                            ...preValue,
                            password: e.target.value,
                        }))
                    }
                />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default Body;
