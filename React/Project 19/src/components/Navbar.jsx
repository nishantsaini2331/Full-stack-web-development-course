import React from "react";
import { Link, Outlet } from "react-router-dom";
import InPageNavigaion from "./InPageNavigaion";

function Navbar() {
    return (
        <div className="w-[100%] lg:w-[50%] min-h-screen mx-auto   bg-gray-900 text-white">
                <InPageNavigaion teams={[{title : "MATCHES" , path : "/"}, {title : "NEWS" , path : "/news"},{title : "TABLE" , path : "/pointsTable"}]}>

                </InPageNavigaion>

                {/* <Link to={'/'}><h1>MATCHES</h1></Link>
                <Link to={'/pointsTable'}><h1>TABLE</h1></Link> */}
            <Outlet />
        </div>
    );
}

export default Navbar;
