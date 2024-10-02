import React from "react";

function SearchRestaurant({
    data: {
        card: {
            card: {
                info: {
                    id,
                    cloudinaryImageId,
                    aggregatedDiscountInfoV3 = {},
                    cuisines,
                    promoted = false,
                    costForTwoMessage,
                    name,
                    avgRating,
                    sla: { slaString },
                },
            },
        },
    },
}) {
    return (
        <div className="bg-white m-4 p-4 flex gap-5 items-center md:max-w-fit ">
            <div className=" w-[30%] ">
                <img
                    className="aspect-square rounded-lg"
                    src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
                        cloudinaryImageId
                    }
                    alt=""
                />
            </div>
            <div className="w-[60%]">
                <p className="font-bold line-clamp-1">By {name}</p>
                <p className="my-1">
                    {" "}
                    <i className="fi fi-ss-star"></i> {avgRating} .{" "}
                    {costForTwoMessage}
                </p>
                <p className="line-clamp-1">{cuisines.join(", ")}</p>
            </div>
        </div>
    );
}

export default SearchRestaurant;

export function withHoc(WrappedCom) {
    return (prop) => {
        return (
            <div className="relative">
                <p className="absolute top-10 text-sm bg-gray-700 px-1 left-5 text-white rounded-lg">Ad</p>
                <WrappedCom {...prop} />
            </div>
        );
    };
}
