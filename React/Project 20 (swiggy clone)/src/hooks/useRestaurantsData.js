import { useContext, useEffect, useState } from "react";
import { Coordinates } from "../context/contextApi";

function useRestaurantsData() {
    const [topRestaurantData, setTopRestaurantData] = useState([]);
    const [topResTitle, setTopResTitle] = useState("");
    const [onlineTitle, setOnlineTitle] = useState("");
    const [onYourMindData, setOnYourMindData] = useState([]);
    const [data, setData] = useState({});
    const {
        coord: { lat, lng },
    } = useContext(Coordinates);

    async function fetchData() {
        const data = await fetch(
            `${import.meta.env.VITE_BASE_URL}/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
        );
        const result = await data.json();
        // console.log(result);
        setData(result.data);
        setTopResTitle(result?.data?.cards[1]?.card?.card?.header?.title);
        setOnlineTitle(result?.data?.cards[2]?.card?.card?.title);

        let mainData = result?.data?.cards.find(
            (data) => data?.card?.card?.id == "top_brands_for_you"
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        let mainData2 = result?.data?.cards.find(
            (data) => data?.card?.card?.id == "restaurant_grid_listing"
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setTopRestaurantData(mainData || mainData2);

        let data2 = result?.data?.cards.find(
            (data) => data?.card?.card?.id == "whats_on_your_mind"
        ).card?.card?.imageGridCards?.info;

        setOnYourMindData(data2);
    }
    useEffect(() => {
        fetchData();
    }, [lat, lng]);

    return [topRestaurantData, topResTitle, onlineTitle, onYourMindData, data];
}

export default useRestaurantsData;
