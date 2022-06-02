import { Chart } from "react-google-charts";
import React, { useState, useEffect } from 'react';


const WorkoutGraphs = (props) => {


  function daysNotWorkedOut(timePeriod, Workouts){
    let nonWorkouts = timePeriod - Workouts;
    props.setNonWorkoutDays(nonWorkouts);
    console.log(nonWorkouts)
  }


  function daysWorkedOut(workoutArray){
    let daysWorkedOut = workoutArray.map(item => item.date)
    .filter((value, index, self) => self.indexOf(value) === index)
    console.log(daysWorkedOut.length);
    props.setDaysWorkedOut(daysWorkedOut.length)

  }
  
  useEffect(() => {
    daysWorkedOut(props.userWorkouts);
    daysNotWorkedOut(props.dayRange, props.daysWorkedOut)
  })
    return (
      <div>
 



<Chart
  chartType="PieChart"
  data={[["Days with a workout", "Days without a workout"], ["Workouts completed", props.daysWorkedOut], [`in the past ${props.dayRange} days`, props.nonWorkoutDays]]}
  width="100%"
  height="400px"
  
/>

</div>
      );
}
 
export default WorkoutGraphs;