import { useEffect } from "react";
import { useState } from "react";

import LikeButton from "../LikeButton/LikeButton";
import "./SocialDisplay.css";

const SocialDisplay = (props) => {
  const [reversedArray, setReversedArray] = useState([])

  useEffect(() => {
    var reversedArray = props.allWorkouts.reverse()
    setReversedArray(reversedArray)
  }, [])
  return (
    <div>
      {reversedArray.map((workout, index) => {
        return (
            <div className="">
            <div className="border">
              <span>{workout.user.first_name} has completed a {workout.muscle_group.name} workout on {workout.date} totalling {workout.total_weight} lbs! <LikeButton /></span>


            </div>
            </div>
            
        );
      })}


    </div>

  );
}

export default SocialDisplay;