import EditWorkout from "../EditWorkout/EditWorkout";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";




const DisplayWorkoutHistory = (props) => {
const navigate = useNavigate()
    
 function handleClick(workout){
    props.setEditInfo(workout)
    navigate("/edit")
    console.log(workout)

 }


    return ( 
        <table className="table" >
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Muscle Group</th>
                    <th scope="col">Movement</th>
                    <th scope="col">Sets</th>
                    <th scope="col">Reps</th>
                    <th scope="col">Weight</th>

                </tr>
            <tbody>
                {props.userWorkouts.map((workout, index) => {
                    return (

                        <tr key={index}>
                            <td>{workout.date}</td>
                            <td>{workout.muscle_group.name}</td>
                            <td>{workout.movement.name}</td>
                            <td>{workout.sets}</td>
                            <td>{workout.reps}</td>
                            <td>{workout.weight}</td>
                            <button value={workout} onClick={() => handleClick(workout)}>Edit</button>
                            <td><button value={workout} onClick={() => props.handleDelete(workout)}>Delete</button></td>
                            
                        
                        </tr>
                    )
                }
                )}

            </tbody>
        </table>


     );
}
 
export default DisplayWorkoutHistory;