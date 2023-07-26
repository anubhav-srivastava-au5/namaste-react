// import * as config from '../config';
import { restaurentList } from '../config';
import {useState} from 'react';
import RestaurentCard from './RestaurentCard';

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
    const filteredData= restaurentData.filter((restaurent)=>
        restaurent.name.toLowerCase().includes(filter)
    )
    return filteredData
}


// const SearchBar = () => {
//     // let searchKeyword="kfc";
//     let [searchKeyword,setSearchKeyword]=useState();
//     // setSearchKeyword(())

//     return (
//         <div className='search-container'>
//         <input type="text" placeholder="Search for restaurents" value={searchKeyword} 
//         onChange={(e)=>{
//             setSearchKeyword(e.target.value)
//         }}/>
//         {/*  style={{  }}  display: 'table', margin: 'auto', width: '50%', height: '27px' */}
//         {/* onClick={e.target.value} */}
//         <button className="search-btn" onClick={(e)=>{
//             const filteredData=filterRestaurent(e.target.value,restaurentList)
//             se
//         }}>Search</button>
//         </div>
//     )
// }


const Body = () => {
    let [restaurent,setRestaurent]=useState(restaurentList)
    let [searchKeyword,setSearchKeyword]=useState("");
    return (
     
        <>
        {/* <ToggleButton /> */}
        {/* <SearchBar /> */}
        <div className='search-container'>
        <input type="text" className='search-input' placeholder="Search for restaurents" value={searchKeyword} 
        onChange={(e)=>{
            setSearchKeyword(e.target.value)
        }}/>
        {/*  style={{  }}  display: 'table', margin: 'auto', width: '50%', height: '27px' */}
        {/* onClick={e.target.value} */}
        <button className="search-btn" onClick={()=>{
            if(searchKeyword=="")
            {
                setRestaurent(restaurentList)
            }else{
            const filteredData=filterRestaurent(searchKeyword,restaurent)
            setRestaurent(filteredData)
            }
        }}>Search</button>
        </div>
        <div className='body'>
        {
            restaurent.map((restaurent)=>{
               return <RestaurentCard {...restaurent}  key={restaurent.id} />
            })
        }
        </div>
        </>
    )
}

export default Body