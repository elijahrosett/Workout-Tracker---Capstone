import axios from "axios";
import React, { useEffect, useState } from 'react';
import DateFilter from "../../components/DateFilter/DateFilter";
import DisplayWorkoutHistory from "../../components/DisplayWorkoutHistory/DisplayWorkoutHistory";
import WorkoutGraphs from "../../components/WorkoutGraphs/WorkoutGraphs";
import useAuth from "../../hooks/useAuth";



const WorkoutHistory = (props) => {
    const [filteredWorkouts, setFilteredWorkouts] = useState([])
    
   
    
   

    return (
     <div>
        <DateFilter userWorkouts={props.userWorkouts} filterResults={props.filterResults} setFilteredWorkouts={props.setFilteredWorkouts} setUserWorkouts={props.setUserWorkouts} fetchAllUserWorkouts={props.fetchAllUserWorkouts} />
        <DisplayWorkoutHistory userWorkouts={props.userWorkouts} filterResults={props.filterResults} setFilteredWorkouts={props.setFilteredWorkouts} />
        <WorkoutGraphs userWorkouts={props.userWorkouts} />
        </div>
    );
}

export default WorkoutHistory;