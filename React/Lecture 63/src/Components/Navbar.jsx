import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <Link to={"/"}> 
                <button>Function Component</button>
            </Link>
            <Link to={"/classCom"}>
                <button>Class Component</button>
            </Link>

            <Outlet />
        </div>
    );
}

export default Navbar;
