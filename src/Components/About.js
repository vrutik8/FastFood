import React from 'react'
// import { Outlet } from 'react-router-dom';
import ProfileClass from './ProfileClass';
import { Component } from 'react';
import UserContext from '../utils/UserContext';

class About extends Component{
  constructor(props){
    super(props);
    console.log("Parent-Constructor");
  }
 componentDidMount(){
   console.log("Parent-ComponentDidMount");
 } 
  
  render(){
    console.log("Parent-render");
    return (
      <div>
        <h1>About Page</h1>
        <UserContext.Consumer>
        {({user})=>(
            <h1>{user.name} and {user.email}</h1>
        )}
        </UserContext.Consumer>
        {/* <Outlet/> */}
          <ProfileClass name={"First Child"} status={"Frontend developer"} />
          <ProfileClass name={"Second Child"} status={"Frontend developer"} />
          <p>This is namaste react 🚀</p>
      </div>
    )
  }
}


export default About;
