import { Chart } from "react-google-charts";
import React, { useState, useEffect } from 'react';

const WeightGraph = (props) => {
    const [chartData, setChartData] = useState([])
    const [legWorkouts, setLegsWorkouts] = useState([])
    const [armWorkouts, setArmWorkouts] = useState([])
    const [shoulderWorkouts, setShoulderWorkouts] = useState([])
    const [chestWorkouts, setChestWorkouts] = useState([])
    const [backWorkouts, setBackWorkouts] = useState([])
    const [absWorkouts, setAbsWorkouts] = useState([])




    useEffect(() => {
        let Weight = props.userWorkoutsFilter.filter(function(workout){
             return workout.muscle_group.name == "Legs";
         });
        let result = Weight.reduce((total, currentValue) => total = total + currentValue.total_weight,0);
        let average = result / Weight.length;
        setLegsWorkouts(average);
        console.log("legs", average)
     },[props.userWorkoutsFilter])
    

    useEffect(() => {
        let Weight = props.userWorkoutsFilter.filter(function(workout){
             return workout.muscle_group.name == "Arms";
         });
        let result = Weight.reduce((total, currentValue) => total = total + currentValue.total_weight,0);
        let average = result / Weight.length;
        setArmWorkouts(average);
        console.log("arms", average);
     },[props.userWorkoutsFilter])


    useEffect(() => {
        let Weight = props.userWorkoutsFilter.filter(function(workout){
             return workout.muscle_group.name == "Shoulders";
         });
        let result = Weight.reduce((total, currentValue) => total = total + currentValue.total_weight,0);
        let average = result / Weight.length;
        setShoulderWorkouts(average);
        console.log("shoulder", average);
        
    },[props.userWorkoutsFilter])


    useEffect(() => {
        let Weight = props.userWorkoutsFilter.filter(function(workout){
             return workout.muscle_group.name == "Chest";
         })
        let result = Weight.reduce((total, currentValue) => total = total + currentValue.total_weight,0);
        let average = result / Weight.length;
        setChestWorkouts(average);
     },[props.userWorkoutsFilter])
    
    useEffect(() => {
        let Weight = props.userWorkoutsFilter.filter(function(workout){
             return workout.muscle_group.name == "Back";
         })
        let result = Weight.reduce((total, currentValue) => total = total + currentValue.total_weight,0);
        let average = result / Weight.length;
        setBackWorkouts(average);
     },[props.userWorkoutsFilter])

     useEffect(() => {
        let Weight = props.userWorkoutsFilter.filter(function(workout){
             return workout.muscle_group.name == "Abs";
         })
        let result = Weight.reduce((total, currentValue) => total = total + currentValue.total_weight,0);
        let average = result / Weight.length;
        setAbsWorkouts(average);
     },[props.userWorkoutsFilter])





   var options = {
        title: `Average total weight lifted per workout in past ${props.dayRange} days`,
        legend: { position: "none" }
   }

    return (
        <Chart
  chartType="ColumnChart"
  data={[["Muscle Group", "Average Weight per workout", {role: 'style'}], ["Legs", legWorkouts, "color: #3450E8"], ["Arms", armWorkouts, "#D534C4"], ["Chest", chestWorkouts, "#FF4490"], ["Abs", absWorkouts, "#FF8263"], ["Shoulders", shoulderWorkouts, "#FFC150"], ["Back", backWorkouts, "#00A879"] ]}
  width="100%"
  height="350px"
  options={options}
  
  
/>
      );
}
 
export default WeightGraph;