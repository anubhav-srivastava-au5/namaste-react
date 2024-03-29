import { useState } from 'react';
import RestaurentCard from './RestaurentCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { filterData } from '../utils/helper';
import useRestaurantCard from '../utils/useRestaurantCard'
const Body = () => {
    const [searchKeyword, setSearchKeyword] = useState("");
    console.log("render")
    const restaurantCard=useRestaurantCard();
    const restaurent=restaurantCard[0];
    let filteredRestaurent=restaurantCard[1];
    return (restaurent?.length == 0) ?
        <Shimmer />
        : (
            <>
                <div className='search-container'>
                    <input type="text" className='search-input' placeholder="Search for restaurents" value={searchKeyword}
                        onChange={(e) => {
                            setSearchKeyword(e.target.value)
                        }} />
                    <button className="search-btn" onClick={() => {

                        filteredRestaurent = filterData(searchKeyword, restaurent)
                        // filteredRestaurent(filteredData)

                    }}>Search</button>
                </div>
                <div className='body'>
                   
                    {
                    filteredRestaurent===undefined ? <h1>No data found...</h1> :
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