import { Chart } from "react-google-charts";
import React, { useState, useEffect } from 'react';

const WeightGraph = (props) => {
    const [chartData, setChartData] = useState([])
    const [legWorkouts, setLegsWorkouts] = useState([])
    const [legWeights, setLegWeights] = useState([])
    const [legGraphArray, setLegGraphArray] = useState([])
    const [armWorkouts, setArmWorkouts] = useState([])

   
    function average(array){
        let average = array.reduce()/array.length;
        console.log(average) 

    } 
    

    useEffect(() => {
        let legWeight = props.userWorkouts.filter(function(workout){
             return workout.muscle_group.name == "Legs";
         })
        setLegsWorkouts(legWeight);
        console.log(legWorkouts)
     },[props.userWorkouts])

    useEffect(() =>{
        let tempData = props.userWorkouts.map(entry => {
            return [entry.date, entry.sets];
        console.log(tempData)
        })


    },[])



     const data = [
        ["Date", "Legs", "Arms", "Back", "Shoulders", "Chest", "Abs"],
        [, 1000, 400, 200, 500, 750, 150],
     ]

      useEffect(() => {
        let totalWeight = legWorkouts.map(workout =>  workout.weight * workout.sets * workout.reps);
        console.log(totalWeight);
        setLegWeights(totalWeight);
    },[legWorkouts])

    
    return (
        <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      
    />
      );
}
 
export default WeightGraph;