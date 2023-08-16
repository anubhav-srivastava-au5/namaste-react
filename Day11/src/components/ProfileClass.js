import React from 'react';

class Profile extends React.Component {
    constructor(props){
        console.log("child constructor");
        super(props);
        //create state 
        this.state={
            count:0,
            name:"anubhav"
        }

    }
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/anubhav-srivastava-au5");
        const json=await data.json();
        console.log(json,"-p----");
        console.log("child component did mount");
        this.setState({
            name:json.login
        })

        // this.timer=setInterval(() => {
        //     console.log("namaste react")
        // }, 1000);

    }
    componentDidUpdate(){
        console.log("child component did update");
    }
    componentWillUnmount(){
        // clearInterval(this.timer)
        console.log("child component will unmount");
    }
    render() {
        console.log("child render")
        const {count}=this.state;
    return (
    <div>
    <h1>Profile class Component by {this.props.name}</h1>
    <h3>Profile class Component by {this.state.name}</h3>
    {/* <h3>Count : {this.state.count}</h3> //other way without destructring */}
    <h3>Count : {count}</h3>
    <button onClick={()=>{
        // this.state.count=1
        
        this.setState({
            count:1
        })
    }}>click me!</button>
    </div>
    )
    }
}

export default Profile