import { useState,useEffect,useContext } from 'react';
import RestaurentCard from './RestaurentCard';
import Shimmer from './Shimmer';
import { Link, useSearchParams } from 'react-router-dom';
import { filterData } from '../utils/helper';
import useRestaurantCard from '../utils/useRestaurantCard'
import userContext from '../utils/UserContext';

const Body = () => {
    const [searchKeyword, setSearchKeyword] = useState("");
    let [filteredRestaurent,setFilteredRestaurent] = useState([]);
    // console.log("rendersearch",searchKeyword)
    console.log(filteredRestaurent,"-------------filteredRestaurent-----",useRestaurantCard())
    // let restaurantCard = useRestaurantCard();
    // let restaurent = restaurantCard;
    // console.log(restaurent,"--------restaurent")
    // useEffect(()=>{
    //     filteredRestaurent=useRestaurantCard()
    // },[])
    // filteredRestaurent = restaurantCard[1];
    // console.log(restaurent?.length,"--------ressssssss---------",filteredRestaurent)
    const {user,setUser}=useContext(userContext)
    return filteredRestaurent?.length == 0 ?
        (<Shimmer />)
        : (
            <>
                <div className='flex items-center justify-center bg-purple-200 shadow-2xl  p-2 m-2'>
                    <input type="text" className='mr-10 w-72 rounded-lg' placeholder="Search for restaurants" value={searchKeyword}
                        onChange={(e) => {
                            setSearchKeyword(e.target.value)
                        }} />
                    <button className=" shadow-lg rounded-lg font-medium w-20" onClick={() => {
                        const filteredData = filterData(searchKeyword, filteredRestaurent)
                        // restaurent=filteredData
                        setFilteredRestaurent(filteredData)
                    }}>Search</button>
                    <input  value={user.name} onChange={(e)=>
                       {setUser({
                        ...user,
                            name:e.target.value
                        })
                    }}/>
                    <input  value={user.email} onChange={(e)=>
                       {setUser({
                        ...user,    
                            email:e.target.value,
                            
                        })
                    }}/>
                </div>
                <div className='flex flex-wrap bg-purple-200 shadow-2xl '>
                    {filteredRestaurent.length === undefined ? <h1>No data found...</h1> :
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