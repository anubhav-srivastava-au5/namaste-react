import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cloudinaryUrl } from "../config";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {
    const { resId } = useParams();
    const [restaurantDetails, setRestaurantDetails] = useState({});
    const [restaurantMenu, setRestaurantMenu] = useState([]);
    useEffect(() => {
        getRestaurantInfo()

    }, []);

    // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.0381152&lng=72.57224&restaurantId=36676&catalog_qa=undefined&submitAction=ENTER

    async function getRestaurantInfo() {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.0381152&lng=72.57224&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
        let json = await data.json();
        console.log(json)
        console.log(json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
        // console.log(Object.values(json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards))
        let arr = json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
        // arr.map((res)=>{
        //     console.log(res?.card?.info?.name)
        //  })

        json = json?.data?.cards[0].card?.card?.info;
        // console.log(json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1])

        setRestaurantDetails(json);
        // setRestaurantMenu(json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
        setRestaurantMenu(arr);
    }

    return (!restaurantDetails)? <Shimmer /> : (
        <div className="menu"> 
            <div className="restaurant-details">
                <h1>Restaurant Id: {resId}</h1>
                <h2>{restaurantDetails.name}</h2>
                <img alt="detail-card" className="menu-img" src={`${cloudinaryUrl}${restaurantDetails.cloudinaryImageId}`} />
                <h3>{restaurantDetails.city}</h3>
                <h3>{restaurantDetails.areaName}</h3>
                <h3>{restaurantDetails.avgRating} stars</h3>
                <h4>{restaurantDetails.costForTwoMessage}</h4>
            </div>
            <div>
                <h1>Menu : </h1>
                <ul>
                    {restaurantMenu.map((item) => (
                        // console.log("---------",res?.card?.info?.name)
                        <li key={item?.card?.info?.key}> {item?.card?.info?.name}</li>
                    ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default RestaurantDetails