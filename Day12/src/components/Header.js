import { useState,useContext } from "react";
import {Link} from "react-router-dom";
import Login from "./Login";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Title = () => (
    <a href='/'>
        <img className="w-20 h-20 m-2"  alt="logo" src="data:image/png;base64,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" />
    </a>
)

const HeaderComponent = () => {
    const {user}=useContext(userContext)
    const cartItems=useSelector(store => store.cart.items);
    return (
        <div className='flex bg-purple-200 shadow-2xl justify-between pt'>
            <Title />
            <div >
                <ul className="flex flex-row m-5 p-5 space-x-6">
                    <li>
                        <Link to="/">
                        Home
                        </Link>
                        </li>
                    <li>
                        <Link to="/about">
                        About US
                        </Link>
                        </li>
                    <li>  <Link to="/contact">Contact</Link></li>
                    <li>  <Link to="/instamart">Instamart</Link></li>
                    <li> <Link to="/cart"> Cart - {cartItems.length} </Link></li>
                </ul>
                </div>
                <div>
                <h1 className="m-5 p-5">{user.name}</h1>
                </div>
                <div>
            {
                <Link to="/login">
                <button className="m-5 p-5 space-x-6" onClick={()=>{
                        <Login />
                }}>Login</button> 
                </Link>
            }
           </div>

        </div>
    )
}

export default HeaderComponent