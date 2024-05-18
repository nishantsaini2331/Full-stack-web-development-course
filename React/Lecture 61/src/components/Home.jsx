import { Link, Outlet, useNavigate } from "react-router-dom";

function Home() {
    let navigation = useNavigate();

    // setTimeout(() => {
    //     navigation("/about")
    // }, 5000);

    return (
        <div className="w-screen h-screen bg-slate-300">
            <nav className="bg-blue-300 h-32 items-center flex justify-evenly text-2xl">
                <Link to="/">
                    {" "}
                    <h1>Logo</h1>
                </Link>
                <div className="flex gap-10">
                    <Link to={"/resume"}>
                        <p>Resume</p>
                    </Link>
                    <Link to={"/project"}>
                        <p>Projects</p>
                    </Link>
                    <Link to={"/about"}>
                        <p>About us</p>
                    </Link>
                    <Link to={"/contact"}>
                        <p>Contact</p>
                    </Link>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default Home;
