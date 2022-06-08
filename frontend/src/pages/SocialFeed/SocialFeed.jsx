import SearchBar from "../../components/SearchBar/SearchBar";
import React, { useEffect, useState } from 'react';
import SocialDisplay from "../../components/SocialDisplay/SocialDisplay";
import Navbar from "../../components/NavBar/NavBar";
const SocialFeed = (props) => {
    useEffect(() => {
        props.fetchAllWorkouts()
        console.log(props.allWorkouts)
        
    }, [props.userWorkouts])
    return ( 
        <div>
            <Navbar/>
    <div className="container background-color">
        
        <SearchBar allWorkouts={props.allWorkouts}/>
        <SocialDisplay allWorkouts={props.allWorkouts} />
    </div>
    </div>
        
     );
}
 
export default SocialFeed;