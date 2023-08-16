import {useState,useEffect} from 'react';

const useRestaurantCard = () =>{
    const [restaurent, setRestaurent] = useState([]);
    const [filteredRestaurent, setFilteredRestaurent] = useState([]);
    useEffect(() => {
        fetchData()
    }, [])
    async function fetchData() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0381152&lng=72.57224&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json?.data?.cards[4], "-----------hi")
        setRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    return [restaurent,filteredRestaurent]
}


export default useRestaurantCard