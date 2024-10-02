import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { useDispatch } from "react-redux";
import { setFilterValue } from "../utils/filterSlice";

function OnlineFoodDelivey({ data, title }) {


    const filterOptions = ["Ratings 4.0+","Rs. 300-Rs. 600","Offers","Less than Rs. 300",]

    const [activeBtn, setActiveBtn ] = useState(null)

    const dispatch = useDispatch()

    function handleFilterBtn (filterName) {
        setActiveBtn(activeBtn === filterName  ? null : filterName)
    }
    dispatch(setFilterValue(activeBtn))
    

    return (
        <div>
            <h1 className="font-bold my-7 text-2xl">{title}</h1>
            <div className="my-7 flex flex-wrap gap-3">
                {
                    filterOptions.map((filterName,i) => (
                        <button key={i} onClick={() => handleFilterBtn(filterName)} className={"filterBtn flex gap-2 " + (activeBtn === filterName ? "active" : "")}>
                            <p>{filterName}</p>
                            <i className="fi text-sm mt-1 fi-br-cross hidden"></i>
                        </button>
                    ))
                }
                
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
                {data.map(({ info, cta: { link } }) => (
                    <div className="hover:scale-95 duration-300" key={info.id}>
                        <RestaurantCard {...info} link={link} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OnlineFoodDelivey;
