import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import "./SocialDisplay.css";


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
                  <td><span>{workout.user.first_name} has completed a {workout.muscle_group.name} on {workout.date} workout totalling {workout.total_weight} lbs!</span></td>
                  <td><a className="social" ><AiOutlineLike/></a></td>



              </div>

          );
      })}   


        </div>

      );
}
 
export default SocialDisplay;