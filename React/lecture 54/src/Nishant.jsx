import {Fragment} from "react";
import "./App.css"

// named export
export function Nishant() {
    let a = 5;
    let b = 6;

    console.log(a + b);

    return (
        <Fragment>
            <h1 className="h1">Nishant</h1>
            <h2>heelo</h2>
        </Fragment>
    );
}

//   default export
// function Nishant(){
//     let a = 5 ;
//     let b = 6;

//     console.log(a+b)
//     return <h1>Nishant</h1>

// }
// export default Nishant
