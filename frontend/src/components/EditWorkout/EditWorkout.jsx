import react from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
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


    async function updateWorkout(pk, array) {
        try {
            let response = await axios.put(`http://127.0.0.1:8000/api/workout/${pk}/`, array
            );
            console.log(response)
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
            muscle_group: editArray.muscle_group,
            movement: editArray.movement,
            sets: editArray.sets,
            reps: editArray.reps,
            weight: editArray.weight,
            date: editArray.date,
            total_weight: editArray.sets * editArray.weight * editArray.reps
        };
        console.log(newWorkout);
        console.log(editArray)
        updateWorkout(props.editInfo.id, newWorkout);
    }

    return (

        <div className="container-lg">
            <div className="text-center">
                <h1>{`Edit Workout ${props.editInfo.id}`}</h1>
            </div>
            <div className="row justify-content-center my-5" >
                <div className="col-lg-6">
                    <form onSubmit={handleSubmit2}>
                       
                    <div className="mb-3">
                       <label className="form-label" >Muscle Group: </label>
                        <select id='ddMuscleGroup' name="muscle_group"
                            className="form-select" onChange={e => { handleMuscleGroup(e.target.value); handleInputChange(e) }} >
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
                            </div>

                        <div className="mb-3">
                        <label className="form-label" >Movement: </label>
                            <select id='ddMovement' className="form-select" name="movement"
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
                                </div>

                            <div className="mb-3">
                       <label for="weight" className="form-label" >Weight:</label>
                            <input
                            className="form-control"
                            placeholder={props.editInfo.weight}
                                type="text"
                                name="weight"
                                value={editArray.weight}
                                onChange={handleInputChange}
                            />
                            </div>


                        
                       
                            <label for="reps" className="form-label" > Reps:</label>
                            <div className="mb-4 input-group">
                                <input
                            className="form-control"
                            placeholder={props.editInfo.reps}
                                type="text"
                                name="reps"
                                value={editArray.reps}
                                onChange={handleInputChange}
                            /></div>
                            
                       
                            <div className="mb-3">
                            <label for="sets" className="form-label">Sets:</label> 
                            <input
                            className="form-control"
                            placeholder={props.editInfo.sets}
                                type="text"
                                name="sets"
                                value={editArray.sets}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" >Date:{""}</label>
                            <input
                                className="form-control"
                                type="date"
                                name="date"
                                value={editArray.date}
                                onChange={handleInputChange}
                            />
                            </div>
                        

                        <div className="mb-4 text-center">
                        <button type="submit" className="btn btn-primary" >Update Workout!</button>
                        </div>
                    </form>
                </div>
        </div >
        </div>









            );
}

            export default EditWorkout;