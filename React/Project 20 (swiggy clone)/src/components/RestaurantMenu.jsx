import React, { useContext, useEffect, useState } from "react";
import { json, Link, useParams } from "react-router-dom";
import { CartContext, Coordinates } from "../context/contextApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart } from "../utils/cartSlice";
import toast from "react-hot-toast";
import AddToCartBtn from "./AddToCartBtn";
import { toggleDiffRes } from "../utils/toogleSlice";
import { MenuShimmer } from "./Shimmer";
import { info } from "autoprefixer";

let veg =
    "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png";
let nonVeg =
    "https://www.kindpng.com/picc/m/151-1515155_veg-icon-png-non-veg-symbol-png-transparent.png";

function RestaurantMenu() {
    const { id } = useParams();
    let mainId = id.split("-").at(-1);

    const [resInfo, setResInfo] = useState([]);
    const [menuData, setMenuData] = useState([]);
    const [discountData, setDiscountData] = useState([]);
    const [topPicksData, setTopPicksData] = useState(null);
    const [value, setValue] = useState(0);
    const [currIndex, setCurrIndex] = useState(false);
    const {
        coord: { lat, lng },
    } = useContext(Coordinates);

    function handleNext() {}

    function handlePrev() {}

    // console.log(menuData);

    async function fetchMenu() {
        // console.log(mainId.split("rest")[1]);
        let data = await fetch(
            `${import.meta.env.VITE_BASE_URL}/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${mainId.split("rest")[1]}&catalog_qa=undefined&submitAction=ENTER`
        );

        // https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9690247&lng=72.8205292&restaurantId=233329&catalog_qa=undefined&submitAction=ENTER
        let res = await data.json();
        // console.log(res);

        const resInfo = res?.data?.cards.find((data) =>
            data?.card?.card?.["@type"].includes("food.v2.Restaurant")
        )?.card?.card?.info;

        // console.log(resInfo);

        const discountInfo = res?.data?.cards.find((data) =>
            data?.card?.card?.["@type"].includes("v2.GridWidget")
        )?.card?.card?.gridElements?.infoWithStyle?.offers;

        setResInfo(resInfo);
        setDiscountData(discountInfo);

        let actualMenu = res?.data?.cards.find((data) => data?.groupedCard);

        // console.log(res);

        setTopPicksData(
            (actualMenu?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(
                (data) => data.card.card.title == "Top Picks"
            )[0]
        );

        setMenuData(
            actualMenu?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
                (data) =>
                    data?.card?.card?.itemCards || data?.card?.card?.categories
            )
        );
    }

    useEffect(() => {
        fetchMenu();
    }, []);

    function toggleFun() {
        setCurrIndex(!currIndex);
    }

    return (
        <div className="w-full  ">
            {menuData.length ? (
                <div className=" w-[95%] md:w-[800px] mx-auto pt-8">
                    <p className="text-[12px] text-slate-500 ">
                        {" "}
                        <Link to={"/"}>
                            {" "}
                            <span className="hover:text-slate-700 hover:cursor-pointer">
                                Home
                            </span>
                        </Link>{" "}
                        /{" "}
                        <Link to={"/"}>
                            {" "}
                            <span className="hover:text-slate-700 hover:cursor-pointer">
                                {resInfo.city}
                            </span>
                        </Link>{" "}
                        / <span className="text-slate-700">{resInfo.name}</span>
                    </p>

                    <h1 className="font-bold pt-6 text-2xl">{resInfo.name}</h1>
                    <div className="w-full h-[206px] bg-gradient-to-t px-4 pb-4 from-slate-200/70  mt-3 rounded-[30px]">
                        <div className="w-full border  border-slate-200/70 rounded-[30px] h-full bg-white ">
                            <div className="p-4 w-full">
                                <div className="flex items-center gap-1 font-semibold">
                                    <i className="fi fi-ss-circle-star mt-1 text-green-600 text-lg"></i>
                                    <span>{resInfo.avgRating}</span>
                                    <span>({resInfo.totalRatingsString})</span>.
                                    <span>{resInfo.costForTwoMessage}</span>
                                </div>

                                <p className="underline font-semibold text-orange-600 ">
                                    {resInfo?.cuisines?.join(", ")}
                                </p>

                                <div className="flex gap-2 mt-2">
                                    <div className="w-[9px] flex flex-col justify-center items-center">
                                        <div className="w-[7px] h-[7px] bg-gray-500 rounded-full"></div>
                                        <div className="w-[1px] h-[25px] bg-gray-500 "></div>
                                        <div className="w-[7px] h-[7px] bg-gray-500 rounded-full"></div>
                                    </div>
                                    <div className="flex flex-col gap-1 text-sm font-semibold">
                                        <p>
                                            Outlet{" "}
                                            <span className="text-gray-500 font-normal">
                                                {resInfo.locality}
                                            </span>
                                        </p>
                                        <p>{resInfo.sla?.slaString}</p>
                                    </div>
                                </div>
                            </div>
                            <hr />

                            <div className=" w-full">
                                <div className="flex items-center p-3">
                                    {resInfo.length !== 0 &&
                                    resInfo?.expectationNotifiers ? (
                                        <>
                                            <img
                                                className="w-6"
                                                src={
                                                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/" +
                                                    resInfo.feeDetails?.icon
                                                }
                                                alt=""
                                            />

                                            <span className="text-sm ml-4 text-gray-500 font-normal">
                                                {resInfo?.expectationNotifiers[0]?.enrichedText.replace(
                                                    /<[^>]*>/g,
                                                    ""
                                                )}
                                            </span>
                                        </>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full overflow-hidden">
                        <div className="flex justify-between mt-8">
                            <h1 className="font-bold text-xl">Deals for you</h1>
                            <div className="flex gap-3">
                                <div
                                    onClick={handlePrev}
                                    className={
                                        ` cursor-pointer rounded-full w-9 h-9 flex justify-center items-center ` +
                                        (value <= 0
                                            ? "bg-gray-100"
                                            : "bg-gray-200")
                                    }
                                >
                                    <i
                                        className={
                                            `fi text-2xl mt-1 fi-rr-arrow-small-left ` +
                                            (value <= 0
                                                ? "text-gray-300"
                                                : "text-gray-800")
                                        }
                                    ></i>
                                </div>
                                <div
                                    onClick={handleNext}
                                    className={
                                        ` cursor-pointer rounded-full w-9 h-9 flex justify-center items-center ` +
                                        (value >= 124
                                            ? "bg-gray-100"
                                            : "bg-gray-200")
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
                        <div className="flex gap-4 mt-5">
                            {discountData.map((data , i) => (
                                <Discount data={data} key={i} />
                            ))}
                        </div>
                    </div>

                    <h2 className="text-center mt-5 leading-5">MENU</h2>

                    <div className="w-full  mt-5 relative cursor-pointer">
                        <div className="w-full p-3 rounded-xl font-semibold text-lg bg-slate-200 text-center ">
                            Search for dishes
                        </div>
                        <i
                            className={"fi fi-rr-search absolute top-3 right-4"}
                        ></i>
                    </div>

                    {topPicksData && (
                        <div className="w-full overflow-hidden">
                            <div className="flex justify-between mt-8">
                                <h1 className="font-bold text-xl">
                                    {topPicksData.card.card.title}
                                </h1>
                                <div className="flex gap-3">
                                    <div
                                        onClick={handlePrev}
                                        className={
                                            ` cursor-pointer rounded-full w-9 h-9 flex justify-center items-center ` +
                                            (value <= 0
                                                ? "bg-gray-100"
                                                : "bg-gray-200")
                                        }
                                    >
                                        <i
                                            className={
                                                `fi text-2xl mt-1 fi-rr-arrow-small-left ` +
                                                (value <= 0
                                                    ? "text-gray-300"
                                                    : "text-gray-800")
                                            }
                                        ></i>
                                    </div>
                                    <div
                                        onClick={handleNext}
                                        className={
                                            ` cursor-pointer rounded-full w-9 h-9 flex justify-center items-center ` +
                                            (value >= 124
                                                ? "bg-gray-100"
                                                : "bg-gray-200")
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
                            <div className="flex gap-4 mt-5">
                                {topPicksData.card.card.carousel.map(
                                    ({
                                        creativeId,
                                        dish: {
                                            info: { defaultPrice, price, id },
                                        },
                                    }) => (
                                        // console.log(creativeId)
                                        <div key={id} className="min-w-[400px] relative h-[405px]">
                                            <img
                                                className="w-full h-full"
                                                src={
                                                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/" +
                                                    creativeId
                                                }
                                                alt=""
                                            />
                                            <div className="absolute bottom-4 text-white flex justify-between w-full px-5">
                                                <p className="">
                                                    ₹
                                                    {defaultPrice / 100 ||
                                                        price / 100}
                                                </p>
                                                <button className=" px-10 py-2 font-bold text-green-400 bg-white rounded-xl">
                                                    Add
                                                </button>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    )}

                    <div>
                        {menuData.map(({ card: { card } } , i) => (
                            <MenuCard card={card} key={i} resInfo={resInfo} />
                        ))}
                    </div>
                </div>
            ) : (
                <MenuShimmer />
            )}
        </div>
    );
}

function MenuCard({ card, resInfo }) {
    // console.log(card);
    let hello = false;

    if (card["@type"]) {
        hello = true;
    }

    const [isOpen, setIsOpen] = useState(hello);

    function toggleDropDown() {
        setIsOpen((prev) => !prev);
    }

    if (card.itemCards) {
        const { title, itemCards } = card;
        return (
            <>
                <div className="mt-7">
                    <div className="flex justify-between ">
                        <h1
                            className={
                                "font-bold text-" +
                                (card["@type"] ? "xl" : "base")
                            }
                        >
                            {title} ({itemCards.length})
                        </h1>
                        <i
                            className={
                                "fi  text-xl fi-rr-angle-small-" +
                                (isOpen ? "up" : "down")
                            }
                            onClick={toggleDropDown}
                        ></i>
                    </div>
                    {isOpen && (
                        <DetailMenu itemCards={itemCards} resInfo={resInfo} />
                    )}
                </div>

                <hr
                    className={
                        "my-5 border-" + (card["@type"] ? "[10px]" : "[4px]")
                    }
                />
            </>
        );
    } else {
        const { title, categories } = card;
        return (
            <div>
                <h1 className="font-bold text-xl">{title}</h1>
                {categories.map((data, i) => (
                    <MenuCard key={i} card={data} resInfo={resInfo} />
                ))}
            </div>
        );
    }
}

function DetailMenu({ itemCards, resInfo }) {
    // console.log(itemCards);

    return (
        <div className="my-5">
            {itemCards.map(({ card: { info } }) => (
                <DetailMenuCard key={info.id} info={info} resInfo={resInfo} />
            ))}
        </div>
    );
}

function DetailMenuCard({ info, resInfo }) {
    // console.log(info)
    const {
        name,
        defaultPrice,
        price,
        itemAttribute,
        ratings: {
            aggregatedRating: { rating, ratingCountV2 },
        },
        description = "",
        imageId,
    } = info;

    // const {cartData , setCartData} = useContext(CartContext)

    const isDiffRes = useSelector((state) => state.toogleSlice.isDiffRes);
    const dispatch = useDispatch();

    function handleIsDiffRes() {
        dispatch(toggleDiffRes());
    }
    function handleClearCart() {
        dispatch(clearCart());
        handleIsDiffRes();
    }

    const [isMore, setIsMore] = useState(false);

    let trimDes = description.substring(0, 138) + "...";

    return (
        <div className="relative w-full">
            <div className="flex w-full justify-between min-h-[182px]">
                <div className="w-[55%] md:w-[70%]">
                    <img
                        className="w-5 rounded-sm"
                        src={
                            itemAttribute &&
                            itemAttribute.vegClassifier == "VEG"
                                ? veg
                                : nonVeg
                        }
                        alt=""
                        srcSet=""
                    />
                    <h2 className="font-bold text-lg">{name}</h2>
                    <p className="font-bold text-lg">
                        ₹{defaultPrice / 100 || price / 100}{" "}
                    </p>

                    <div className="flex items-center gap-1">
                        {" "}
                        <i className={"fi mt-1 text-xl fi-ss-star"}></i>{" "}
                        <span>
                            {rating} ({ratingCountV2})
                        </span>
                    </div>

                    {description.length > 140 ? (
                        <div>
                            <span className=" line-clamp-2 md:line-clamp-none ">
                                {isMore ? description : trimDes}
                            </span>
                            <button
                                className="hidden md:block font-bold"
                                onClick={() => setIsMore(!isMore)}
                            >
                                {isMore ? "less" : "more"}
                            </button>
                        </div>
                    ) : (
                        <span className="">{description}</span>
                    )}
                </div>
                <div className="w-[40%] md:w-[20%] relative h-full">
                    <img
                        className="rounded-xl aspect-square"
                        src={
                            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                            imageId
                        }
                        alt=""
                    />
                    <AddToCartBtn
                        info={info}
                        resInfo={resInfo}
                        handleIsDiffRes={handleIsDiffRes}
                    />
                </div>
            </div>
            <hr className="my-5" />
            {isDiffRes && (
                <div className="w-[520px] h-[204px] flex flex-col gap-2 left-[33%] p-8 border z-50 shadow-md fixed bottom-10 bg-white">
                    <h1>Items already in cart</h1>
                    <p>
                        Your cart contains items from other restaurant. Would
                        you like to reset your cart for adding items from this
                        restaurant?
                    </p>
                    <div className="flex justify-between gap-3 w-full uppercase">
                        <button
                            onClick={handleIsDiffRes}
                            className="border-2 w-1/2 p-3 border-green-600 text-green-600"
                        >
                            No
                        </button>
                        <button
                            onClick={handleClearCart}
                            className="  w-1/2 p-3 bg-green-600 text-white "
                        >
                            Yes, start Afresh
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

function Discount({
    data: {
        info: { header, offerLogo, couponCode },
    },
}) {
    // console.log(header);
    return (
        <div className="flex gap-2  min-w-[328px] border p-3 h-[76px] rounded-2xl">
            <img
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/" +
                    offerLogo
                }
                alt=""
            />
            <div>
                <h2 className="font-bold text-xl">{header}</h2>
                <p className="text-gray-500">{couponCode}</p>
            </div>
        </div>
    );
}

export default RestaurantMenu;
