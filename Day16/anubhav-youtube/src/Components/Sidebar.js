import { useSelector } from "react-redux"
import store from "../utils/store"
import {Link} from "react-router-dom"
const Sidebar =() =>{
    const isMenuOpen= useSelector(store=>store.app.isMenuOpen);

    // below is called early return in react
    if(!isMenuOpen) return null;
    return (
        <div className="p-5 shadow-lg w-48">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>Shorts</li>
                <li>Subscriptions</li>
            </ul>
            <ul className="pt-5">
                <li>Library</li>
                <li>History</li>
            </ul>
            <h1 className="pt-5 font-bold">Explore</h1>
            <ul>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Movies</li>
                <li>Live</li>
                <li>Gaming</li>
                <li>News</li>
                <li>Sports</li>
                <li>Learning</li>
                <li>Fashion & Beauty</li>


            </ul>
        </div>
    )
}

export default Sidebar