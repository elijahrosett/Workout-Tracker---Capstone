import react from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";
import axios from "axios";
import React, { useState, useEffect } from 'react';


let initialValues = {
    
    "muscle_group":"" ,
    "movement": "",
    "sets": "",
    "reps": "",
    "date": ""
}

const AddWorkoutPage = (props) => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [dateFilter, setDatefilter] = useState([{startDate: null, endDate: null}])
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewWorkout)
    const [muscleGroups, setMuscleGroups ] = useState([])
    const [movements, setMovements] = useState([])
   

    async function fetchMuscleGroups() {
        try {
            let response = await axios.get('http://127.0.0.1:8000/api/workout/all/musclegroups');
            setMuscleGroups(response.data);
            console.log(response.data)
        }
        catch (ex) {
            console.log('there is an error', ex)
        }
    }


    async function fetchMovements() {
        try {
            let response = await axios.get('http://127.0.0.1:8000/api/workout/all/movements');
            setMovements(response.data);
            console.log(response.data)
        }
        catch (ex) {
            console.log('there is an error', ex)
        }
    }

    useEffect(() => {
      fetchMuscleGroups();
      fetchMovements();
  }, [])

    const handleMuscleGroup = (id) => {
        console.log(id)
        console.log(movements)
        const dt = movements.filter(x => x.muscle_group == id);
        setMovements(dt);
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
                    muscleGroups &&
                    muscleGroups !== undefined ?
                    muscleGroups.map((group, index) => {
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
                        movements &&
                        movements !== undefined ?
                        movements.map((m, index) => {
                            return (
                                <option key={index} value={m.id}>{m.name}</option>
                            )

                        })
                        : "No movement"
                }
            </select>
                </label>
                <label>
                    Reps:{""}
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
