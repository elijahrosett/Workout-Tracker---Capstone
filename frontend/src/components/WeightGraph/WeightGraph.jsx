import { Chart } from "react-google-charts";
import React, { useState, useEffect } from 'react';

const WeightGraph = (props) => {
    const [chartData, setChartData] = useState([])
    const [legWorkouts, setLegsWorkouts] = useState([])
    const [legGraphArray, setLegGraphArray] = useState([])
    const [armWorkouts, setArmWorkouts] = useState([])

    useEffect(() => {
        

    },[])

    useEffect(() => {
        let legWeight = props.userWorkouts.filter(function(workout){
             return workout.muscle_group.name == "Legs";
         })
        setLegsWorkouts(legWeight);
        console.log(legWorkouts)
     },[])

    useEffect(() =>{
        let tempData = props.userWorkouts.map(entry => {
            return [entry.date, entry.sets];
        console.log(tempData)
        })


    },[])



     const data = [
        ["Date", "Legs", "Arms", "Back", "Shoulders", "Chest", "Abs"],
        ["2021-06-01", 1000, 400, 200, 500, 750, 150],
        ["2021-06-02", 1170, 460, 250, 500, 750, 150],
        ["2021-06-03", 660, 1120, 300, 500, 750, 150],
        ["2021-06-04", 1030, 540, 350, 500, 750, 150],
      ];

    
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