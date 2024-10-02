import { Routes, Route } from "react-router-dom";
// import Body from "./components/Body";
// import Head from "./components/Head";
// import RestaurantMenu from "./components/RestaurantMenu";
import { CartContext, Coordinates, Visibility } from "./context/contextApi";
import React, { lazy, Suspense, useEffect, useState } from "react";
// import Cart from "./components/Cart";
import { useSelector } from "react-redux";
import SigninPage from "./components/SigninBtn";
// import Search from "./components/Search";

const Head = lazy(() => import("./components/Head"));
const Body = lazy(() => import("./components/Body"));
const Search = lazy(() => import("./components/Search"));
const Cart = lazy(() => import("./components/Cart"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

function App() {
    // const [visible , setVisible] = useState(false);
    const [coord, setCoord] = useState({ lat: 28.5355161, lng: 77.3910265 });
    // const [ cartData , setCartData] = useState([])

    const visible = useSelector((state) => state.toogleSlice.searchBarToogle);
    const loginVisible = useSelector((state) => state.toogleSlice.loginToggle);

    // function get_Data_From_Local_Storage(){
    //     let data = JSON.parse(localStorage.getItem("cartData")) || []
    //     setCartData(data)
    // }

    // useEffect(() => {
    //     get_Data_From_Local_Storage()
    // } ,[])

    return (
        // <CartContext.Provider value={{cartData , setCartData}} >
        <Coordinates.Provider value={{ coord, setCoord }}>
            {/* <Visibility.Provider value={{visible, setVisible}}> */}
            <div
                className={
                    " " +
                    (visible || loginVisible
                        ? "max-h-screen overflow-hidden"
                        : " ")
                }
            >
                <Suspense fallback="loading....">
                    <Routes>
                        <Route path="/" element={<Head />}>
                            <Route path="/" element={<Body />} />
                            <Route
                                path="/restaurantMenu/:id"
                                element={<RestaurantMenu />}
                            />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/search" element={<Search />} />
                            <Route
                                path="*"
                                element={<h1>coming soon ......</h1>}
                            />
                        </Route>
                    </Routes>
                </Suspense>
            </div>
            {/* </Visibility.Provider> */}
        </Coordinates.Provider>
        // </CartContext.Provider>
    );
}

export default App;
