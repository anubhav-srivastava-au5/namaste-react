import { useParams } from "react-router-dom";
import { cloudinaryUrl } from "../config";
import Shimmer from "./Shimmer";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantDetails = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantDetails(resId)
    console.log(resInfo,"--------------resInfo")
    const restaurantDetails = resInfo[0];
    const restaurantMenu = resInfo[1];
    console.log(restaurantDetails,restaurantMenu,"--------here");
    const dispatch = useDispatch();
    const addFoodItem=(item) =>{
        dispatch(addItem(item))
    }
    // !restaurantDetails

    return Object.keys(restaurantDetails).length === 0 ? (<Shimmer />) : (
        <div className="flex flex-wrap bg-purple-200 shadow-2xl  p-2 m-2">
            <div>
                <h1 className='font-bold text-sm'>Restaurant Id: {resId}</h1>
                <h2 className='font-bold text-xl'>{restaurantDetails.name}</h2>
                <img alt="detail-card" className="w-72 h-72" src={`${cloudinaryUrl}${restaurantDetails.cloudinaryImageId}`} />
                <h3>{restaurantDetails.city}</h3>
                <h4>{restaurantDetails.areaName}</h4>
                <h5>{restaurantDetails.avgRating} stars</h5>
                <h6>{restaurantDetails.costForTwoMessage}</h6>
            </div>
            <div>
                <h1 className='font-bold text-xl'>Menu : </h1>
                <ul>
                    {restaurantMenu?.map((item) => (

                        <li key={item?.card?.info?.id}> {item?.card?.info?.name} - <button className="p-2 m-2 bg-purple-500" onClick={()=>{
                            addFoodItem(item)
                        }} >Add</button></li>
                    ))
                    }
                </ul>
            </div>

        </div>
    )
}


export default RestaurantDetails