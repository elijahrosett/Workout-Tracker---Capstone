import react from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";
import axios from "axios";
import React, { useState, useEffect } from 'react';





const EditWorkout = (props) => {


    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [muscleGroups, setMuscleGroups] = useState([])
    const [movements, setMovements] = useState([])
    const [editArray, setEditArray] = useState([])
 
           

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


    async function postNewWorkout(array){
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/workout/", array, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            navigate('/')
           
        } catch (error) {
            console.log(error.message)
           
        }
    }


    const handleInputChange = (e) => {
    
        e.persist();
        if (e.target.name === "isStudent") {
          setEditArray({ ...editArray, [e.target.name]: e.target.checked });
        } else {
          setEditArray({ ...editArray, [e.target.name]: e.target.value });
        }
      }; 

    function handleSubmit2(event) {
        event.preventDefault();
        let newWorkout = {
            muscle_group: editArray.muscle_group ,
            movement: editArray.movement,
            sets: editArray.sets ,
            reps: editArray.reps ,
            weight: editArray.weight,
            date: editArray.date,
            total_weight: editArray.sets * editArray.weight * editArray.reps
        };
        console.log(newWorkout);
        console.log(editArray)
        postNewWorkout(newWorkout);
    }

    return (
        <div className="container">
            <h1>Add Workout</h1>
            <form className="form" onSubmit={handleSubmit2}>

                <label>
                    <select id='ddMuscleGroup' name="muscle_group"
                        className="form-control select-class" onChange={e => { handleMuscleGroup(e.target.value); handleInputChange(e) }} >
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
                        value={editArray.movement}
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
                    Weight:{""}
                    <input
                        type="text"
                        name="weight"
                        value={editArray.weight}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Reps:{""}
                    <input
                        type="text"
                        name="reps"
                        value={editArray.reps}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Sets:{""}
                    <input
                        type="text"
                        name="sets"
                        value={editArray.sets}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Date:{""}
                    <input
                        type="date"
                        name="date"
                        value={editArray.date}
                        onChange={handleInputChange}
                    />
                </label>
                <button>Update Workout!</button>

            </form>

        </div>




    );
}

export default EditWorkout;