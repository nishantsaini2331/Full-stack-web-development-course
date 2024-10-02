import React, { useContext, useEffect, useState } from "react";
import SearchRestaurant, { withHoc } from "./SearchRestaurant";
import { Coordinates } from "../context/contextApi";
import Dish from "./Dish";
import { useDispatch, useSelector } from "react-redux";
import { resetSimilarResDish } from "../utils/toogleSlice";

function Search() {
    const [searchQuery, setSearchQuery] = useState("");
    const [dishes, setDishes] = useState([]);
    const [restaurantData, setRestaurantData] = useState([]);
    const [selectedResDish, setSelectedResDish] = useState(null);
    const [similarResDishes, setSimilarResDishes] = useState([]);
    const {
        coord: { lat, lng },
    } = useContext(Coordinates);

    const PromotedRes = withHoc(SearchRestaurant);



    const {
        isSimilarResDishes,
        city,
        resId,
        itemId,
        resLocation,
    } = useSelector((state) => state.toogleSlice.similarResDish);
    // console.log({ isSimilarResDishes, city, resId, itemId, resLocation });
    const dispatch = useDispatch();
    // console.log(isSimilarResDishes);
    const filterOptions = ["Restaurant", "Dishes"];

    const [activeBtn, setActiveBtn] = useState("Dishes");

    function handleFilterBtn(filterName) {
        setActiveBtn(activeBtn === filterName ? activeBtn : filterName);
    }

    function handleSearchQuery(e) {
        let val = e.target.value;
        if (e.keyCode == 13) {
            setSearchQuery(val);
            setSelectedResDish(null);
            setDishes([]);
        }
    }

    useEffect(() => {
        if (isSimilarResDishes) {
            fetchSimilarResDishes();
        }
    }, [isSimilarResDishes]);

    async function fetchSimilarResDishes() {
        let pathname = `/city/${city}/${resLocation}`;
        let encodedPath = encodeURIComponent(pathname);

        let data = await fetch(
            `${import.meta.env.VITE_BASE_URL}/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${searchQuery}&trackingId=null&submitAction=ENTER&selectedPLTab=dish-add&restaurantMenuUrl=${encodedPath}-rest${resId}%3Fquery%3D${searchQuery}&restaurantIdOfAddedItem=${resId}&itemAdded=${itemId}`
        );
        let res = await data.json();
        // console.log("res", res);
        // console.log(res?.data?.cards);
        // console.log(res?.data?.cards[1])
        setSelectedResDish(res?.data?.cards[1]);
        // console.log(res?.data?.cards[2]?.card?.card?.cards)
        setSimilarResDishes(res?.data?.cards[2]?.card?.card?.cards);
        dispatch(resetSimilarResDish());
    }

    async function fetchDishes() {
        let data = await fetch(
            `${import.meta.env.VITE_BASE_URL}/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${searchQuery}&trackingId=4836a39e-ca12-654d-dc3b-2af9d645f8d7&submitAction=ENTER&queryUniqueId=7abdce29-5ac6-7673-9156-3022b0e032f0`
        );
        let res = await data.json();      
        console.log(res)
        let finalData = (res?.data?.cards.find(data => data?.groupedCard).groupedCard?.cardGroupMap?.DISH?.cards).filter(
            (data) => data?.card?.card?.["@type"].includes("food.v2.Dish")
        ); 

        console.log((res?.data?.cards.find(data => data?.groupedCard).groupedCard?.cardGroupMap?.DISH?.cards))

        console.log("finalData",finalData)
        setDishes(finalData);
    }

    async function fetchResaturantData() {
        let data = await fetch(
            `${import.meta.env.VITE_BASE_URL}/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${searchQuery}&trackingId=4836a39e-ca12-654d-dc3b-2af9d645f8d7&submitAction=ENTER&queryUniqueId=7abdce29-5ac6-7673-9156-3022b0e032f0&selectedPLTab=RESTAURANT`
        );
        let res = await data.json();
        const finalData = (res?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards).filter(
            (data) => data?.card?.card?.info
        );
        setRestaurantData(finalData);
    }

    useEffect(() => {
        if (searchQuery === "") {
            return;
        }
        // setSearchQuery("");
        fetchDishes();
        fetchResaturantData();
    }, [searchQuery]);

    return (
        <div className="w-full mt-10 md:w-[800px] mx-auto">
            <div className="w-full relative">
                <i className="fi fi-rr-angle-small-left text-2xl ml-2 mt-1 absolute top-1/2 -translate-y-1/2"></i>
                <i className="fi fi-rr-search absolute top-1/2 right-0 -translate-y-1/2 mr-5"></i>
                <input
                    // onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearchQuery}
                    className="border-2 w-full pl-8 py-3 text-xl focus:outline-none"
                    type="text"
                    placeholder="Search for restaurant and food"
                />
            </div>

            {!selectedResDish && (
                <div className="my-7 flex flex-wrap gap-3">
                    {filterOptions.map((filterName , i) => (
                        <button
                        key={i}
                            onClick={() => handleFilterBtn(filterName)}
                            className={
                                "filterBtn flex gap-2 " +
                                (activeBtn === filterName ? "active" : "")
                            }
                        >
                            <p>{filterName}</p>
                        </button>
                    ))}
                </div>
            )}

            <div className="w-full md:w-[800px] mt-5  grid grid-cols-1 md:grid-cols-2   bg-[#f4f5f7]">
                {selectedResDish ? (
                    <>
                        <div>
                            <p className="p-4">Item added to cart</p>
                            <Dish data={selectedResDish.card.card} />
                            <p className="p-4">
                                More dishes from this restaurant
                            </p>
                        </div>
                        <br />

                        {similarResDishes.map((data , i) => (
                            <Dish
                            key={i}
                                data={{
                                    ...data.card,
                                    restaurant:
                                        selectedResDish.card.card.restaurant,
                                }}
                            />
                        ))}
                    </>
                ) : activeBtn === "Dishes" ? (
                    dishes.map((data,i) => <Dish key={i} data={data.card.card} />)
                ) : (
                    restaurantData.map((data,i) =>
                        data?.card?.card?.info?.promoted ? (
                            <PromotedRes data={data} key={i} />
                        ) : (
                            <SearchRestaurant data={data}  key={i}/>
                        )
                    )
                )}
            </div>
        </div>
    );
}

export default Search;

//https://www.swiggy.com/dapi/restaurants/search/v3?lat=18.9690247&lng=72.8205292&str=pizza&trackingId=undefined&submitAction=ENTER&selectedPLTab=dish-add&restaurantMenuUrl=%2Fcity%2Fmumbai%2Ffrancescos-pizzeria-chowpatty-rest14751%3Fquery%3Dpizza&restaurantIdOfAddedItem=14751&itemAdded=78361058
//https://www.swiggy.com/dapi/restaurants/search/v3?lat=18.9690247&lng=72.8205292&str=&trackingId=null&submitAction=ENTER&selectedPLTab=dish-add&restaurantMenuUrl=%2Fcity%2Fmumbai%2Ffrancescos-pizzeria-kemps-corner-mahalaxmi-malabar-hill-rest14751%3Fquery%3D&restaurantIdOfAddedItem=14751&itemAdded=78361058
