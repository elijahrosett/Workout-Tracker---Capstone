const DisplayWorkoutHistory = (props) => {
    



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
                {props.userWorkouts.map((workout, index) => {
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
 
export default DisplayWorkoutHistory;