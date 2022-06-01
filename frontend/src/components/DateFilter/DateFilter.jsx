import React, { useState } from 'react';

const DateFilter = (props) => {
    const [startDate, setStartfilter] = useState("0000-00-00")
    const [endDate, setEndfilter] = useState("9999-99-99")


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
        console.log(newArray)
    }


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
        </form>

    );
}

export default DateFilter;