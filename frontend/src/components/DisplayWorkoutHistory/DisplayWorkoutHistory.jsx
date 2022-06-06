import { BiEditAlt, BiTrash } from "react-icons/bi";
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
                            <div >
                            <td><a value={workout} onClick={() => handleClick(workout)}><BiEditAlt /></a></td>
                            <td><a value={workout} onClick={() => props.handleDelete(workout)}><BiTrash color="red"/></a></td>
                            </div>
                        
                        </tr>
                    )
                }
                )}

            </tbody>
        </table>


     );
}
 
export default DisplayWorkoutHistory;