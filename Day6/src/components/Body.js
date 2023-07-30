// import * as config from '../config';
// import { restaurentList } from '../config';
import {useState,useEffect} from 'react';
import RestaurentCard from './RestaurentCard';
import Shimmer from './Shimmer';

// const ToggleButton = () => {
//     // let searchKeyword="kfc";
//     let [toggle,setToggle]=useState("false");
//     // setSearchKeyword(())

//     return (
//         <div className='toggle-container'>
//             <h1>{toggle}</h1>
//         <button className="toggle-btn" onClick={()=>{
//             if(toggle=="false") setToggle("true")
//             else setToggle("false")
//         }}>Search</button>
//         </div>
//     )
// }

function filterRestaurent(filter,restaurentData)
{
    try{
    const filteredData= restaurentData.filter((restaurent)=>
        restaurent.info.name.toLowerCase().includes(filter)
    )
    return filteredData
    }
    catch(err){
        console.error("Error while filtering data",err)
    }
}
let abc={
    "width":200,
    "height":600
}
const Body = () => {
    // useEffect(fetchData(),[])

    const [restaurent,setRestaurent]=useState([]);
    const [filteredRestaurent,setFilteredRestaurent]=useState([]);
    const [searchKeyword,setSearchKeyword]=useState("");
    useEffect(()=>{
        fetchData()
        // console.log("useeffect")
    },[])
    console.log("render")

    async function fetchData(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants,"-----------daaaaaaaaaaaaata   ?.data?.cards[2]?.data?.data?.cards")
        // setRestaurent(json?.data?.cards[2])
        // return data.data.cards.json;
        setRestaurent(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurent(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    // (restaurent?.length==0)?<Shimmer/> :
    if(filteredRestaurent?.length==0) return <h1>No restaurent match your data..!!</h1>
    if(!restaurent) return <h1>No Data Available.....</h1> //also write null if dont want to show anything //this is known as early return // not rendered component
    
 
    
    return (restaurent?.length==0)? 
    // (["1","2","3","4","5"].map((res)=>{
    // return 
    <Shimmer {...abc} />
    // })
    // )
     :(
        <>
        <div className='search-container'>
        <input type="text" className='search-input' placeholder="Search for restaurents" value={searchKeyword} 
        onChange={(e)=>{
            setSearchKeyword(e.target.value)
        }}/>
        {/*  style={{  }}  display: 'table', margin: 'auto', width: '50%', height: '27px' */}
        {/* onClick={e.target.value} */}
        <button className="search-btn" onClick={()=>{
            // if(searchKeyword=="")
            // {
            //     setRestaurent(restaurentList)
            // }else{
            const filteredData=filterRestaurent(searchKeyword,restaurent)
            setFilteredRestaurent(filteredData)
            // }
        }}>Search</button>
        </div>
        <div className='body'>
        {/* filteredRestaurent?.length==0 ? ( <h1>No restaurent match your data..!!</h1>) */}
        {
            filteredRestaurent.map((res)=>{
               return <RestaurentCard {...res?.info}  key={res?.info?.id} />
            })
        }
        </div>
        </>
    )
}

export default Body