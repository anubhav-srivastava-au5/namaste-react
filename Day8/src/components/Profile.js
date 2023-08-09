import {useState} from "react"

const Profile = (props) =>{

    const [count,setCount]=useState(0)
    return (
        <div>
            <h1>Profile Functional Component Done by {props.name}</h1>
            <h3>Counter: {count}</h3>
            <button onClick={()=>{ setCount(1)}}>click me!</button>
        </div>
   
    )
}

export default Profile