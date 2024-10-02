import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

function TopRestaurant({ data = [] , title }) {
    // console.log(data);
    const [value, setValue] = useState(0);
    // const [data, setData] = useState([]);

    // console.log(value);

    function handleNext() {
        setValue((prev) => prev + 50);
    }

    function handlePrev() {
        setValue((prev) => prev - 50);
    }

    // async function fetchData() {
    //     const data = await fetch(
    //         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    //     );
    //     const result = await data.json();
    //     // console.log(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //     setData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // }
    // useEffect(() => {
    //     fetchData();
    // }, []);

    return (
        <div className="mt-14 w-full">
            <div className="flex justify-between mt-5">
                <h1 className="font-bold text-2xl">
                    {title}
                </h1>
                <div className="flex gap-3">
                    <div
                        onClick={handlePrev}
                        className={
                            ` cursor-pointer rounded-full w-9 h-9 flex justify-center items-center ` +
                            (value <= 0 ? "bg-gray-100" : "bg-gray-200")
                        }
                    >
                        <i
                            className={
                                `fi text-2xl mt-1 fi-rr-arrow-small-left ` +
                                (value <= 0 ? "text-gray-300" : "text-gray-800")
                            }
                        ></i>
                    </div>
                    <div
                        onClick={handleNext}
                        className={
                            ` cursor-pointer rounded-full w-9 h-9 flex justify-center items-center ` +
                            (value >= 124 ? "bg-gray-100" : "bg-gray-200")
                        }
                    >
                        <i
                            className={
                                `fi text-2xl mt-1 fi-rr-arrow-small-right ` +
                                (value >= 124
                                    ? "text-gray-300"
                                    : "text-gray-800")
                            }
                        ></i>
                    </div>
                </div>
            </div>

            <div
                className={`flex mt-4 gap-5 w-full duration-300`}
                style={{ translate: `-${value}%` }}
            >
                {data.map(({ info, cta : {link}}) => (
                    <div className="hover:scale-95 duration-300" key={info.id}>
                        <RestaurantCard  {...info}  link={link} />
                    </div>
                ))}
            </div>

            <hr className="border mt-10" />
        </div>
    );
}

export default TopRestaurant;
