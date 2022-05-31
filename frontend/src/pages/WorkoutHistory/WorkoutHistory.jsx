import axios from "axios";
import React, { useEffect, useState } from 'react';
import useAuth from "../../hooks/useAuth";


const WorkoutHistory = () => {
    const [userWorkouts, setUserWorkouts] = useState([])
    const [user, token] = useAuth();

    async function fetchAllUserWorkouts(){
        try{
        let response = await axios.get('http://127.0.0.1:8000/api/workout/', {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        setUserWorkouts(response.data);
        console.log(response.data)
      }
      catch (ex) {
        console.log('there is an error', ex)
      }
      }
    useEffect(() => {
        fetchAllUserWorkouts();
    }, [])


    return ( 
        <h1>This is the workout history page</h1>
     );
}
 
export default WorkoutHistory;