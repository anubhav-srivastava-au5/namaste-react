import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.jpg";
import userIcon from "./user-icon.png"

const Logo=()=>{
    return (
        <img src={logo} alt="company logo" width={50} height={60}/>
    )
}

const SearchBar=()=>{
    return (
        <input type="text" justifyContent="center" placeholder="Search Here..."/>
    )
}

const UserIcon=()=>{
    return (
        <img src={userIcon} alt ="user icon" width={50} height ={60} top={8} fontSize={18} position="absolute" right={16} />
    )
}
// position: absolute;
// top: 8px;
// right: 16px;
// font-size: 18px;
const DivComponent=()=>{
    return (
        <header position="reative ">
            <Logo />
            <SearchBar />
            <UserIcon />
        </header>
    )
}

const root =ReactDOM.createRoot(document.getElementById('root'));

root.render(<DivComponent />)