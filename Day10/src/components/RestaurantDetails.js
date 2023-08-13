import { useParams } from "react-router-dom";
import { cloudinaryUrl } from "../config";
import Shimmer from "./Shimmer";
import useRestaurantDetails from "../utils/useRestaurantDetails";

const RestaurantDetails = () => {
    const { resId } = useParams();
    const resInfo=useRestaurantDetails(resId)
    const restaurantDetails=resInfo[0];
    const restaurantMenu=resInfo[1];
    return (!restaurantDetails)? <Shimmer /> : (
        <div className="flex flex-wrap bg-purple-200 shadow-2xl  p-2 m-2"> 
            <div>
                <h1 className='font-bold text-sm'>Restaurant Id: {resId}</h1>
                <h2 className='font-bold text-xl'>{restaurantDetails.name}</h2>
                <img alt="detail-card" className="w-72 h-72" src={`${cloudinaryUrl}${restaurantDetails.cloudinaryImageId}`} />
                <h3>{restaurantDetails.city}</h3>
                <h3>{restaurantDetails.areaName}</h3>
                <h3>{restaurantDetails.avgRating} stars</h3>
                <h4>{restaurantDetails.costForTwoMessage}</h4>
            </div>
            <div>
                <h1 className='font-bold text-xl'>Menu : </h1>
                <ul>
                    {restaurantMenu.map((item) => (
                        <li key={item?.card?.info?.key}> {item?.card?.info?.name}</li>
                    ))
                    }
                </ul>
            </div>
        </div>
    )
}


export default RestaurantDetails