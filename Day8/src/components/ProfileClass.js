import React from 'react';

class Profile extends React.Component {
    constructor(props){
        super(props);
        //create state 
        this.state={
            count:0,
        }

    }
    render() {
        const {count}=this.state;
    return (
    <div>
    <h1>Profile class Component by {this.props.name}</h1>
    {/* <h3>Count : {this.state.count}</h3> //other way without destructring */}
    <h3>Count : {count}</h3>
    <button onClick={()=>{
        this.state.count=1
        
        // this.setState({
        //     count:1
        // })
    }}>click me!</button>
    </div>
    )
    }
}

export default Profile