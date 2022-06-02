import { Chart } from "react-google-charts";
import React, { useState, useEffect } from 'react';


const WorkoutGraphs = (props) => {
  const [daysWorkedOut, setDaysWorkedOut] = useState([])
  const [daysNotWorkedOut, setDaysNotWorkedOut] = useState([])


    return (
  



<Chart
  chartType="PieChart"
  data={[["Completed Workouts", "Weight"], ["Workouts completed", daysWorkedOut], ["No workout completed (Past 30 days)", 30]]}
  width="100%"
  height="400px"
  legendToggle
/>


      );
}
 
export default WorkoutGraphs;