import axios from "axios";
import React, { useEffect, useState } from 'react';
import DateFilter from "../../components/DateFilter/DateFilter";
import DisplayWorkoutHistory from "../../components/DisplayWorkoutHistory/DisplayWorkoutHistory";
import WorkoutGraphs from "../../components/WorkoutGraphs/WorkoutGraphs";
import useAuth from "../../hooks/useAuth";
import moment from 'moment';



const WorkoutHistory = (props) => {
    
    const [startDate, setStartfilter] = useState(moment().format("YYYY-MM-DD"))
    const [endDate, setEndFilter] = useState(moment().format("YYYY-MM-DD"))
    
   
    
   

    return (
     <div>
        <DateFilter startDate={startDate} setStartfilter={setStartfilter} endDate={endDate} setEndFilter={setEndFilter} userWorkouts={props.userWorkouts} filterResults={props.filterResults} setFilteredWorkouts={props.setFilteredWorkouts} setUserWorkouts={props.setUserWorkouts} fetchAllUserWorkouts={props.fetchAllUserWorkouts} />
        <DisplayWorkoutHistory userWorkouts={props.userWorkouts} filterResults={props.filterResults} setFilteredWorkouts={props.setFilteredWorkouts} />
        <WorkoutGraphs endDate={endDate} startDate={startDate} userWorkouts={props.userWorkouts} />
        </div>
    );
}

export default WorkoutHistory;