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
    const filteredRestaurent=restaurantCard[1];
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

                        const filteredData = filterData(searchKeyword, restaurent)
                        setFilteredRestaurent(filteredData)

                    }}>Search</button>
                </div>
                <div className='body'>
                   
                    {
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