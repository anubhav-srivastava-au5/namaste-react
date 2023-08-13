import { useState } from 'react';
import RestaurentCard from './RestaurentCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { filterData } from '../utils/helper';
import useRestaurantCard from '../utils/useRestaurantCard'
const Body = () => {
    const [searchKeyword, setSearchKeyword] = useState("");
    console.log("render")
    const restaurantCard = useRestaurantCard();
    const restaurent = restaurantCard[0];
    const filteredRestaurent = restaurantCard[1];
    return (restaurent?.length == 0) ?
        <Shimmer />
        : (
            <>
                <div className='flex items-center justify-center bg-purple-200 shadow-2xl  p-2 m-2'>
                    <input type="text" className='mr-10 w-72 rounded-lg' placeholder="Search for restaurants" value={searchKeyword}
                        onChange={(e) => {
                            setSearchKeyword(e.target.value)
                        }} />
                    <button className=" shadow-lg rounded-lg font-medium w-20" onClick={() => {
                        const filteredData = filterData(searchKeyword, restaurent)
                        setFilteredRestaurent(filteredData)
                    }}>Search</button>
                </div>
                <div className='flex flex-wrap bg-purple-200 shadow-2xl '>
                    {filteredRestaurent === undefined ? <h1>No data found...</h1> :
                        filteredRestaurent.map((res) => {
                            return (
                                <Link to={"/restaurant/" + res?.info?.id}
                                    key={res?.info?.id}>
                                    <RestaurentCard {...res?.info} />
                                </Link>
                            )
                        })
                    }
                </div>
            </>
        )
}

export default Body;