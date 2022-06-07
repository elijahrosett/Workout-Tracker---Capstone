import SearchBar from "../../components/SearchBar/SearchBar";
import React, { useEffect, useState } from 'react';
import SocialDisplay from "../../components/SocialDisplay/SocialDisplay";

const SocialFeed = (props) => {
    useEffect(() => {
        props.fetchAllWorkouts()
        console.log(props.allWorkouts)
        
    }, [props.userWorkouts])
    return ( 
    <div>
        <SearchBar allWorkouts={props.allWorkouts}/>
        <SocialDisplay allWorkouts={props.allWorkouts} />
    </div>
        
     );
}
 
export default SocialFeed;