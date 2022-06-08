import { useState } from "react";
import "./LikeButton.css"
import { AiFillLike } from "react-icons/ai";

const LikeButton = (props) => {

    const [buttonClass, setButtonClass] = useState('inactive');

    function handleClick(){
        if(buttonClass === 'inactive'){
            setButtonClass('like')
        }
        else {
            setButtonClass('inactive');
        }

    }
    return (
        <div>
            <a className={buttonClass} onClick={handleClick}> <AiFillLike/> </a>
        </div>
    )
}

export default LikeButton