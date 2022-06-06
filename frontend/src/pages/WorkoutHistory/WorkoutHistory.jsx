import axios from "axios";
import React, { useEffect, useState } from 'react';
import DateFilter from "../../components/DateFilter/DateFilter";
import DisplayWorkoutHistory from "../../components/DisplayWorkoutHistory/DisplayWorkoutHistory";
import WorkoutGraphs from "../../components/WorkoutGraphs/WorkoutGraphs";
import useAuth from "../../hooks/useAuth";
import moment from 'moment';
import EditWorkout from "../../components/EditWorkout/EditWorkout";
import WeightGraph from "../../components/WeightGraph/WeightGraph";



const WorkoutHistory = (props) => {

    const [startDate, setStartfilter] = useState(moment().format("YYYY-MM-DD"))
    const [endDate, setEndFilter] = useState(moment().format("YYYY-MM-DD"))
    const [daysWorkedOut, setDaysWorkedOut] = useState([""])
    const [dayRange, setDayRange] = useState(["90"])
    const [nonWorkoutDays, setNonWorkoutDays] = useState([])



    useEffect(() => {
        props.fetchAllUserWorkouts()
    }, [])


    return (
        <div className="container-fluid">
            <div className="flex">
                <DateFilter daysWorkedOut={daysWorkedOut} setDayRange={setDayRange} startDate={startDate} setStartfilter={setStartfilter} endDate={endDate} setEndFilter={setEndFilter} userWorkouts={props.userWorkouts} filterResults={props.filterResults} setFilteredWorkouts={props.setFilteredWorkouts} setUserWorkouts={props.setUserWorkouts} fetchAllUserWorkouts={props.fetchAllUserWorkouts} />
            </div>
            <div className="table"> 
            <DisplayWorkoutHistory setEditInfo={props.setEditInfo} handleEdit={props.handleEdit} handleDelete={props.handleDelete} dayRange={dayRange} daysWorkedOut={daysWorkedOut} userWorkouts={props.userWorkouts} filterResults={props.filterResults} setFilteredWorkouts={props.setFilteredWorkouts} />
            </div>
            <div className="row">
                <div className="col-md-6">
                    <WorkoutGraphs nonWorkoutDays={nonWorkoutDays} setDaysWorkedOut={setDaysWorkedOut} setNonWorkoutDays={setNonWorkoutDays} daysWorkedOut={daysWorkedOut} setDayRange={setDayRange} dayRange={dayRange} endDate={endDate} startDate={startDate} userWorkouts={props.userWorkouts} />
                </div>
                <div className="col-md-6">
                    <WeightGraph dayRange={dayRange} fetchAllUserWorkouts={props.fetchAllUserWorkouts} userWorkouts={props.userWorkouts} />
                </div>
            </div>
        </div>
    );
}

export default WorkoutHistory;