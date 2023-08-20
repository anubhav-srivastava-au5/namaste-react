import { useContext } from "react"
import userContext from "../utils/UserContext"

const Footer = () => {
    const {user} = useContext(userContext);
    return (

        <footer className="bg-purple-200 shadow-2xl  p-2 m-2 mt-60">
        
        <h2>copyright 2023 India, all rights reserved to {user.name}-{user.email}</h2>
        </footer>
    )
}

export default Footer