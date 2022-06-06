
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
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Muscle Group</th>
                    <th scope="col">Movement</th>
                    <th scope="col">Sets</th>
                    <th scope="col">Reps</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Total Weight</th>
                    

                </tr>
                </thead>
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
                            <td>{workout.total_weight}</td>
                            
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