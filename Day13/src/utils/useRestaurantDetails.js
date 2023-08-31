import {useState,useEffect} from 'react'; 

const useRestaurantDetails = (resId) =>{
    const [restaurantDetails, setRestaurantDetails] = useState({});
    const [restaurantMenu, setRestaurantMenu] = useState([]);
    useEffect(() => {
        getRestaurantInfo()

    }, []);
    async function getRestaurantInfo() {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.0381152&lng=72.57224&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
        let json = await data.json();
        let arr = json?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
        json = json?.data?.cards[0].card?.card?.info;
        
        setRestaurantDetails(json);
        setRestaurantMenu(arr);
    }
    return [restaurantDetails,restaurantMenu]
}


export default useRestaurantDetails;