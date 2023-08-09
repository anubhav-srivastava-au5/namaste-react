import { Outlet } from "react-router-dom";
import ProfileFunctional from "./Profile";
import ProfileClass from "./ProfileClass";

const About = ()=>{
    return (
        <div>
        <h1>In About Page</h1>
        <ProfileFunctional name={"Anubhav"} />
        {/* <Outlet /> */}
        <ProfileClass name={"Anubhav"} />
        </div>
    )
}

export default About