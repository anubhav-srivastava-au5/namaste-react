import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/appSlice";
import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";
// import store from "../utils/store";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchQuerySuggestion, setSearchQuerySuggestion] = useState([])
    const [showSuggestion, setShowSuggestion] = useState(false);
    const searchCache=useSelector((store) =>store.search)
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }
 
    useEffect(() => {
        const timer = setTimeout(() => 
        {
            if(searchCache[searchQuery])
            {
                setSearchQuerySuggestion(searchCache[searchQuery])
            }else{
            fetchSearchData()
            }            
        }, 200)

        return () => {
            clearTimeout(timer)
        };

    }, [searchQuery])

    const fetchSearchData = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json = await data.json();
        // console.log(json[1], "------------json")
        setSearchQuerySuggestion(json[1])

        dispatch(cacheResults({
            [searchQuery]:json[1]
        }))
    }

    return (
        <div className="grid grid-flow-col shadow-lg">
            <div className="flex col-span-1">
                <img onClick={() => toggleMenuHandler()} className=" cursor-pointer w-10 h-10 ml-5" alt="menu-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAaVBMVEX///8AAAAEBAT8/PxVVVUbGxsYGBilpaVoaGgfHx/KysqysrJSUlIaGhpOTk6enp729vbp6enc3NwlJSXj4+OGhoYxMTEODg61tbVkZGSqqqqioqIqKirx8fFvb29DQ0N7e3s4ODjIyMihkwGrAAACFUlEQVR4nO3dWVYCMRCF4RjGZpJJURAQ979IbfXoA1WN5Uulcv5vBfceDekhFCkBAAAAAAAAAAAAAOJY3i/m+a5webC4X3b3OAy9Q/7VcNRRo/fsHc9i3FOLjL2z2Yy1HiPvZFZ7ZZ3PvYNZDeQVf/DOZScv+Jl3LLu+WKTxjmXXiEWK3wevZbGId6r/oEhpalkjO7HIi3csuxexSLArrdZJLDLxjmU3EYvE29rljT2lVbC9vVkpRdJ6453NYrPWeqR0PIX5DM6no97jw/bhPCy+TB6eH7adNQAAAAAAAAAANepN+035D7Gb/lQ/rPVp8ugd8q8eldduX0bF/zF+ZeW0VmvqHc5mqvVY77yj2ey0lz21vNVde+eyk1+HvnrHsnsVi1y8Y9ldxCLBlnpLPh3kneo/KFKauotUs9gv3rHs5I/fajbEai5RUt87l5V2FHAbbLmrl/HBbqzyk9YjpX0lt7r1PHyI8zjo6cbjIAAAAAAAAABAhdov5ns/o77p9hfzj3Fmo+Rxx6iEWoZXrAbe2WzUcSIL72RWM7nHm3cuO/n1W5yF/kMeOVnNWKri34Fe4yhgceouEnCNyAMng40Ja8kjQMOd8dcObIWbW6yNyV0Gu2b8+M9STtbsvYNZqV/pCXa1JY+bbPVCNTl1HdkalX/D/m3eeRLw8ycJBsXvjLmZHW78JAEAAAAAAAAAAAAAoCjvhdQ5hX0cY4IAAAAASUVORK5CYII=" />
                {/* <Link to="/"><img className="w-25 h-8 ml-2 mt-1" alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" /></Link> */}
                <img className="w-25 h-8 ml-2 mt-1" alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" />
            </div>
            <div className="col-span-10 px-10">
                <div className="flex">
                    <input className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" placeholder="Search" onChange={(e) => {
                        setSearchQuery(e.target.value)
                      
                    }}
                    onFocus = {()=>setShowSuggestion(true)}
                    onBlur={()=>setShowSuggestion(false)}
                    />
                    <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">🔍</button>
                    <img className="w-5 h-5 ml-5 mt-3" alt="mic-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2eX7ZPETZSt1QwQ9nqkPxSXnhXaRq4eEO_A&usqp=CAU" />
                </div>
                {showSuggestion &&
                    <div className="fixed bg-white py-2 px-2 ml-2 w-[25rem] shadow-lg rounded-lg border border-gray-100">
                    <ul>
                        {
                            searchQuerySuggestion.map((item) => (
                                <li className="py-2 shadow-sm hover:bg-gray-100" key={item}>🔍 {item}</li>
                            ))
                        }


                        {/* <li>🔍 qwe</li>
                        <li>🔍 qwerty</li>
                        <li>qwe</li>
                        <li>qwerty</li>
                        <li>qwe</li>
                        <li>qwerty</li> */}
                    </ul>
                </div>}
            </div>
            <div className="flex col-span-1">
                {/* <img alt="create-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6C7EZM0D3TwrHntv8gvAxq92OkX-ZARLVG6za0Awetew9wHt-GSHkid7uyS_oYooyNug&usqp=CAU" />
            <img alt="notification-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCelizrIlYdCuYPn_hOyLfXQRnucxxEmDRw&usqp=CAU" /> */}

                <img className="w-10 h-10 ml-5" alt="setting-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEX///8AAACjo6PQ0NAwMDDa2tqdnZ2VlZVycnKurq5cXFzt7e3g4OD39/eHh4ewsLDJyclVVVV7ORaJAAABMklEQVR4nO3dW26DQAwF0OGVBAhJuv/NVkrVFP5rWTLnrOBaI4ZBGuzWAAAAAAAAAAAAAIAoW798Lf2WHSPOtftxzQ4S5db9umVHiTF3f+bsMCG6vewwEV6HCl/ZcQJcDhVesuMEqF/hfKiw4lazHipcs+NEWHYFLtlhQqzVl7C1+6fAe3aUKNvjXd+j8NG7tWmYsiMAAAAAAAAAAAD8l6m/9JUvRQ3j+17bOGQHifL83E18ZkeJMezul9ZcxXFX4ZgdJsJ0uOddcbvpDxX22XEC1P/fov4a1n8O6++lJ3gf1j/TnOBc2up/WwAAAAAAAAAAACdTvAdt+T7C5XtB1+/nXb4ne/2++vVnI9T/36J+hfXnzNSfFXSCeU/1Z3adYO7aCWbnAQAAAAAAAAAAAEC6b2WPBRixXGk2AAAAAElFTkSuQmCC" />
                <img className="w-10 h-10 ml-5" alt="signin-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            </div>
        </div>
    )

}

export default Header