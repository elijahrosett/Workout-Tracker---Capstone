import react from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";
import axios from "axios";


let initialValues = {
    "name": "",
    "muscle_group":"" ,
    "movement": "",
    "reps": "",
    "sets": "",
    "date": ""
}

const AddWorkoutPage = () => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewWorkout)

    async function postNewWorkout(){
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/workout/", formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            navigate('/')
            
        } catch (error) {
            console.log(error.message)
            
        }
    }
    return ( 
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Name:{""}
                    <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                </label>
                <label>
                    Muscle Group:{""}
                    <input 
                    type="text"
                    name="muscle_group"
                    value={formData.muscle_group}
                    onChange={handleInputChange}
                />
                </label>
                <label>
                    Movement:{""}
                    <input 
                    type="text"
                    name="movement"
                    value={formData.movement}
                    onChange={handleInputChange}
                />
                </label>
                <label>
                    reps:{""}
                    <input 
                    type="text"
                    name="reps"
                    value={formData.reps}
                    onChange={handleInputChange}
                />
                </label>
                <label>
                    Sets:{""}
                    <input 
                    type="text"
                    name="sets"
                    value={formData.sets}
                    onChange={handleInputChange}
                />
                </label>
                <label>
                    Date:{""}
                    <input 
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                />
                </label>
                <button>Add Workout!</button>
            </form>

        </div>


     );
}
 
export default AddWorkoutPage;
