import { useEffect } from "react";
import { useState } from "react";


const SocialDisplay = (props) => {
    const [reversedArray, setReversedArray] = useState([])

    useEffect(() => {
        var reversedArray = props.allWorkouts.reverse()
        setReversedArray(reversedArray)
    },[])
    return (
        <div className="list-group">
      {reversedArray.map((workout, index) => {
          return (
              <div className="card">
                  <span>{workout.user.first_name} has completed a {workout.muscle_group.name} workout totalling {workout.total_weight} lbs!</span>



              </div>

          );
      })}   


        </div>

      );
}
 
export default SocialDisplay;