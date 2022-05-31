import axios from "axios";
import React, { useEffect, useState } from 'react';
import useAuth from "../../hooks/useAuth";


const WorkoutHistory = () => {
    const [userWorkouts, setUserWorkouts] = useState([])
    const [user, token] = useAuth();

    async function fetchAllUserWorkouts() {
        try {
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
        <table className="table" >
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Muscle Group</th>
                    <th scope="col">Movement</th>
                    <th scope="col">Sets</th>
                    <th scope="col">Reps</th>
                </tr>
            <tbody>
                {userWorkouts.map((workout, index) => {
                    return (

                        <tr key={index}>
                            <td>{workout.date}</td>
                            <td>{workout.muscle_group.name}</td>
                            <td>{workout.movement.name}</td>
                            <td>{workout.sets}</td>
                            <td>{workout.reps}</td>
                        
                        </tr>
                    )
                }
                )}

            </tbody>
        </table>
    );
}

export default WorkoutHistory;