import { Outlet } from "react-router-dom";
import ProfileFunctional from "./Profile";
import ProfileClass from "./ProfileClass";
import Story from "./Story";
import React from "react";
// const About = ()=>{
//     return (
//         <div>
//         <h1>In About Page</h1>
//         <ProfileFunctional name={"Anubhav"} />
//         {/* <Outlet /> */}
//         <ProfileClass name={"Anubhav"} />
//         <Story />
//         </div>
//     )
// }

// export default About




class About extends React.Component {
    constructor(props){
        super(props)
        console.log("parent constructor")
    }
    componentDidMount(){
        console.log("parent componentDidMount")
    }
    componentDidUpdate(){
        console.log("parent componentDidUpdate")
    }
    componentWillUnmount(){
        console.log("parent componentWillUnmount")
    }
    render() {
        console.log("parent render")
        return (
            <div>
                <h1>In About Page</h1>
                <ProfileFunctional name={"Anubhav"} />
                <ProfileClass name={"Anubhav"} />
                <Story />
            </div>
        )
    }
}

export default About