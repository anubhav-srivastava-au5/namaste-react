import {useEffect, useState} from "react"

const Profile = (props) =>{

    const [count,setCount]=useState(0);
    console.log("state profile functional")
    useEffect(()=>{
        console.log("useeffect profile functional")
       const timer=setInterval(() => {
            console.log("namaste react op")
        }, 1000);

        return () =>{
            console.log("return profile functional")
            clearInterval(timer)
        }  //it is unmounting as of class component
         

        
    },[])
    return (

        <div>
            <h1>Profile Functional Component Done by {props.name}</h1>
            <h3>Counter: {count}</h3>
            <button onClick={()=>{ setCount(1)}}>click me!</button>
        </div>
   
    )
}

export default Profile