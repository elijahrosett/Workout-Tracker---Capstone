import { Chart } from "react-google-charts";
import React, { useState, useEffect } from 'react';


const WorkoutGraphs = (props) => {


  function daysNotWorkedOut(timePeriod, Workouts){
    let nonWorkouts = timePeriod - Workouts;
   
    if (nonWorkouts <= 0){
      props.setNonWorkoutDays(0)
    }
    else{props.setNonWorkoutDays(nonWorkouts);
    } 
  }


  function daysWorkedOut(workoutArray){
    let daysWorkedOut = workoutArray.map(item => item.date)
    .filter((value, index, self) => self.indexOf(value) === index)
    props.setDaysWorkedOut(daysWorkedOut.length)

  }
  
  useEffect(() => {
    daysWorkedOut(props.userWorkoutsFilter);
    daysNotWorkedOut(props.dayRange, props.daysWorkedOut)
  })

  var options = {
    title: "Percent of days with a workout vs without"
  }
    return (
      <div>
 



<Chart
  chartType="PieChart"
  data={[["Days with a workout", "Days without a workout"], ["Days with a workout", props.daysWorkedOut], [`Days without a workout (Past ${props.dayRange} days)`, props.nonWorkoutDays]]}
  width="100%"
  height="400px"
  options = {options}
  
/>

</div>
      );
}
 
export default WorkoutGraphs;