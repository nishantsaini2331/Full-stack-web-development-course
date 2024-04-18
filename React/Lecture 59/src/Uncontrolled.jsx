import { useRef } from "react";

function Uncontrolled() {
    let emailRef = useRef();
    let passRef = useRef();

    function formSubmit(event) {
        event.preventDefault();
        console.log({
            email: emailRef.current.value,
            password: passRef.current.value,
        });
    }

    return (
        <>
            <h1>Uncontrolled</h1>
            <form>
                <input type="text" placeholder="email" ref={emailRef} />
                <br />
                <br />
                <input type="password" placeholder="password" ref={passRef} />
                <br />
                <br />
                <button onClick={formSubmit}>Login</button>
            </form>
        </>
    );
}

export default Uncontrolled;
