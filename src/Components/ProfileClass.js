import React from 'react'


class Profile extends React.Component{

        constructor(props){
            super(props);
            console.log("child-Constructor " + this.props.name);
            // create a state here 
            this.state = {
                count:0,
                count2:0,
            }
            // console.log("constructor");
        }

        componentDidMount(){
           console.log('child-ComponentDidMount ' + this.props.name);
        }

        render(){
            console.log( "child-render" + this.props.name);
            const{ count } = this.state;
    return(
        <div>
        <h1>Profile class Component</h1>
        <h2>Vrutik</h2>
        <h2>Name : {this.props.name}</h2>
        <h2>Status : {this.props.status}</h2>
        <h3>count : {count}</h3>
        <button onClick={() => {
            this.setState({
                count:1,
                // count2:0,
            })
        }}>counter</button>
        </div>
    )
}
}

export default Profile;