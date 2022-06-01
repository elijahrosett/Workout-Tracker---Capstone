import React, { useState, useEffect } from 'react';


const DateFilter = (props) => {
    const [startDate, setStartfilter] = useState()
    const [endDate, setEndfilter] = useState()


    function handleSubmit(event){
        event.preventDefault();
        console.log(startDate)
        console.log(endDate)
        filterWorkouts()
    }


    function filterWorkouts() {
        var newArray = props.userWorkouts.filter(function (el) {
            return el.date <= endDate &&
                el.date >= startDate;
        });
        console.log(newArray);
        props.setUserWorkouts(newArray);
    }
    function resetFilter(){
        props.fetchAllUserWorkouts()
    }

    useEffect(() => {
        props.fetchAllUserWorkouts();
        
    }, [startDate, endDate])
    return (
        <form onSubmit={handleSubmit} >
            <h1>Workout history</h1>
            <div>
                <h6>Start Date:</h6>
                <input type="date" value={startDate} onChange={(event) => setStartfilter(event.target.value)} />
            </div>
            <div>
                <h6>End Date:</h6>
                <input type="date" value={endDate} onChange={(event) => setEndfilter(event.target.value)}
                />
            </div>
            <button type='submit' >Filter</button>
            <button onClick={resetFilter}>Reset</button>
        </form>

    );
}

export default DateFilter;