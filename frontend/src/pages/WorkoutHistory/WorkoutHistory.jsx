import axios from "axios";
import React, { useEffect, useState } from 'react';
import DateFilter from "../../components/DateFilter/DateFilter";
import DisplayWorkoutHistory from "../../components/DisplayWorkoutHistory/DisplayWorkoutHistory";
import WorkoutGraphs from "../../components/WorkoutGraphs/WorkoutGraphs";
import useAuth from "../../hooks/useAuth";
import moment from 'moment';
import EditWorkout from "../../components/EditWorkout/EditWorkout";



const WorkoutHistory = (props) => {
    
    const [startDate, setStartfilter] = useState(moment().format("YYYY-MM-DD"))
    const [endDate, setEndFilter] = useState(moment().format("YYYY-MM-DD"))
    const [daysWorkedOut, setDaysWorkedOut] = useState([""])
    const [dayRange, setDayRange] = useState(["90"])
    const [nonWorkoutDays, setNonWorkoutDays] = useState([])
    
    
   
    
   

    return (
     <div>
        <DateFilter daysWorkedOut={daysWorkedOut} setDayRange={setDayRange} startDate={startDate} setStartfilter={setStartfilter} endDate={endDate} setEndFilter={setEndFilter} userWorkouts={props.userWorkouts} filterResults={props.filterResults} setFilteredWorkouts={props.setFilteredWorkouts} setUserWorkouts={props.setUserWorkouts} fetchAllUserWorkouts={props.fetchAllUserWorkouts} />
        <DisplayWorkoutHistory setEditInfo={props.setEditInfo} handleEdit={props.handleEdit} handleDelete={props.handleDelete} dayRange={dayRange} daysWorkedOut={daysWorkedOut} userWorkouts={props.userWorkouts} filterResults={props.filterResults} setFilteredWorkouts={props.setFilteredWorkouts} />
        <WorkoutGraphs nonWorkoutDays={nonWorkoutDays} setDaysWorkedOut={setDaysWorkedOut} setNonWorkoutDays={setNonWorkoutDays} daysWorkedOut={daysWorkedOut} setDayRange={setDayRange} dayRange={dayRange} endDate={endDate} startDate={startDate} userWorkouts={props.userWorkouts} />
        
        </div>
    );
}

export default WorkoutHistory;