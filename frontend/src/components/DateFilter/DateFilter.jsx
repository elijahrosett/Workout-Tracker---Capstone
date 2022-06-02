import moment from 'moment';
import React, { useState, useEffect } from 'react';
import WorkoutGraphs from '../WorkoutGraphs/WorkoutGraphs';


const DateFilter = (props) => {
    
    
    


    function handleClick(e){
        console.log(props.userWorkouts);
        filterWorkouts(e);
        console.log(props.startDate);
        console.log(props.endDate);
        
    }


    function filterWorkouts(e) {
        if (e == 24){
            var newArray = props.userWorkouts.filter(function (el) {
                return el.date <= props.endDate &&
                    el.date >= moment().subtract(1, 'days').format("YYYY-MM-DD")        
            });}
        else if (e == 7){
            var newArray = props.userWorkouts.filter(function (el) {
                return el.date <= props.endDate &&
                    el.date >= moment().subtract(7, 'days').format("YYYY-MM-DD")            
            });}
        else if (e == 30){
            var newArray = props.userWorkouts.filter(function (el) {
                return el.date <= props.endDate &&
                    el.date >= moment().subtract(30, 'days').format("YYYY-MM-DD");
                       
            });}
        else if (e == 90){
            var newArray = props.userWorkouts.filter(function (el) {
                return el.date <= props.endDate &&
                    el.date >= moment().subtract(90, 'days').format("YYYY-MM-DD")
            });}
   
        props.setUserWorkouts(newArray);
        console.log(newArray);
        
    }




     function resetFilter(){
         props.fetchAllUserWorkouts()
     }
//  SET END DATE TO NEW DATE() THEN CHECK BOOKMARKS TO FIGURE OUT HOW TO SET FOR X AMOUNT OF DAYS AGO, MAKE A ON CLICK FOR EACH BUTTON
     
      
         
      
    
    return (
        <div>
            
            <div>
                <button value={24} onClick={() => handleClick(24)}>Past 24 Hours</button>
            </div>
            <div>
            <button value={7} onClick={() => handleClick(7)}>Past 7 Days</button>
            </div>
            <div>
            <button value={30} onClick={() => handleClick(30)}>Past 30 Days</button>
                
            </div>
            <div>
            <button value={90} onClick={() => handleClick(90)}>Past 90 Days</button>
            </div>
            <div>
            <button onClick={resetFilter}>Reset Filter</button>
            </div>
            
            
        </div>

    );
}

export default DateFilter;





