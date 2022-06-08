import moment from 'moment';

import "./DateFilter.css";
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useEffect } from 'react';


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
                props.setDayRange(1)
                return el.date <= props.endDate &&
                    el.date >= moment().subtract(1, 'days').format("YYYY-MM-DD")        
            });}
        else if (e == 7){
            var newArray = props.userWorkouts.filter(function (el) {
                props.setDayRange(7)
                return el.date <= props.endDate &&
                    el.date >= moment().subtract(7, 'days').format("YYYY-MM-DD")            
            });}
        else if (e == 30){
            var newArray = props.userWorkouts.filter(function (el) {
                props.setDayRange(30)
                return el.date <= props.endDate &&
                    el.date >= moment().subtract(30, 'days').format("YYYY-MM-DD");
                       
            });}
        else if (e == 90){
            var newArray = props.userWorkouts.filter(function (el) {
                props.setDayRange(90)
                return el.date <= props.endDate &&
                    el.date >= moment().subtract(90, 'days').format("YYYY-MM-DD")
            });}
        
        
   
        props.setUserWorkoutsFilter(newArray.reverse());
        console.log(newArray);
        
    }




     function resetFilter(){
         props.setUserWorkoutsFilter(props.userWorkouts)
     }

      
    useEffect(() => {
        handleClick(90)

    },[])  
      
    
    return (
        <div >
            <Dropdown>
                <Dropdown.Toggle className="filter-color">
                <span> 
                 Filter
                 </span>
                 
                </Dropdown.Toggle>
            <Dropdown.Menu className="filter-color button"  title="Filter" id="vertical-dropdown-1" >
                <Dropdown.Item value={24}  onClick={() => handleClick(24)} >Past 24 Hours</Dropdown.Item>
                <Dropdown.Item value={7} onClick={() => handleClick(7)} >Past 7 Days</Dropdown.Item>
                <Dropdown.Item value={30} onClick={() => handleClick(30)}>Past 30 Days</Dropdown.Item>
                <Dropdown.Item value={90} onClick={() => handleClick(90)}>Past 90 Days</Dropdown.Item>
                <Dropdown.Item  onClick={resetFilter}>Reset Filter</Dropdown.Item>
            </Dropdown.Menu>  
            </Dropdown> 
        </div>

    );
}

export default DateFilter;





