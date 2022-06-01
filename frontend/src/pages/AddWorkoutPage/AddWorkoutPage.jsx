import react from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";
import axios from "axios";
import React, { useState, useEffect } from 'react';








  
let initialValues = {
    
    "muscle_group":"" ,
    "movement": "",
    "reps": "",
    "sets": "",
    "date": ""
}

const AddWorkoutPage = (props) => {
    const [muscleGroup, setMuscleGroup] = useState([]);
    const [movement, setMovement] = useState([]);
    const [user, token] = useAuth()
    const navigate = useNavigate()
    
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewWorkout)
    const muscleGroups = [
        { id: "1", name: 'Legs' },

        { id: "2", name: 'Arms' },

        { id: "3", name: 'Shoulders' },

        { id: "4", name: 'Chest' },

        { id: "5", name: 'Abs' },
    ]
    const movements = [
        { id: "1", muscleGroupId: "1", name: "squat" },
        { id: "2", muscleGroupId: "2", name: "bicep curl" },
        { id: "3", muscleGroupId: "3", name: "military press" },
        { id: "4", muscleGroupId: "4", name: "bench press" },
        { id: "5", muscleGroupId: "5", name: "sit ups" },
    ]

    useEffect(() => {
        setMuscleGroup(muscleGroups);
    }, [])

    function filter(filter){

    }

    const handleMuscleGroup = (id) => {
        console.log(id)
        const dt = movements.filter(x => x.muscleGroupId === id);
        setMovement(dt);
        console.log(dt);
        
    }

   
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
                    <select id='ddMuscleGroup' name="muscle_group" 
                    className="form-control select-class"  onChange={e => { handleMuscleGroup(e.target.value); handleInputChange(e)} } >
                <option value="0">Select Muscle Group</option>
                {
                    muscleGroup &&
                        muscleGroup !== undefined ?
                        muscleGroup.map((group, index) => {
                            return (
                                <option key={index} value={group.id}>{group.name}</option>
                            )

                        })
                        : "No muscle group"
                }

            </select>
              
                </label>
                <label>
                <select id='ddMovement' className="form-control select-class" name="movement"
                    value={formData.movement}
                    onChange={handleInputChange} >
                <option value="0">Select movement</option>
                {
                        movement &&
                        movement !== undefined ?
                        movement.map((m, index) => {
                            return (
                                <option key={index} value={m.id}>{m.name}</option>
                            )

                        })
                        : "No movement"
                }
            </select>
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
