import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.jpg";
import userIcon from "./user-icon.png"

const Logo=()=>{
    return (
        <img src={logo} alt="company logo" width={50} height={60} style={{ float: 'left' }} />
    )
}

const SearchBar=()=>{
    return (
        <input type="text" placeholder="Search Here..." style={{display:'table', margin:'auto'}} />
    )
}

const UserIcon=()=>{
    return (
        <img src={userIcon} alt ="user icon" width={50} height ={60} style={{ float: 'right', margin:-20 }} />
    )
}
const DivComponent=()=>{
    return (
        <div>
            <Logo />
            <SearchBar />
            <UserIcon />
        </div>
    )
}

const root =ReactDOM.createRoot(document.getElementById('root'));

root.render(<DivComponent />)