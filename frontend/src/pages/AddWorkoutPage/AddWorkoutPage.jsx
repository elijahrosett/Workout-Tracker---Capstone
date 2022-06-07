import react from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import "./AddWorkout.css"





const EditWorkout = (props) => {


    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [muscleGroups, setMuscleGroups] = useState([])
    const [movements, setMovements] = useState([])
    const [editArray, setEditArray] = useState([])
    const [movementFilter, setMovementFilter] = useState([])



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


    const handleMuscleGroup = (id) => {
        console.log(id)
        console.log(movements)
        const dt = movements.filter(x => x.muscle_group == id);
        setMovementFilter(dt);
        console.log(movementFilter);
        
    }


    async function postNewWorkout(array) {
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/workout/", array, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            

        } catch (error) {
            console.log(error.message)

        }
    }
    function refreshPage() {
        window.location.reload(false);
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
        postNewWorkout(newWorkout);
    }

    
   

    useEffect(() => {
        fetchMuscleGroups();
        fetchMovements();
    }, [])

    return (
        <div >

        <div className="container-lg background-color"
  
>
            <div className="text-center">
                <h1>Add Workout</h1>
            </div>
            <div className="row justify-content-center my-5" >
                <div className="col-lg-6">
                    <form onSubmit={handleSubmit2}>

                        <div className="mb-3" >
                            <label className="form-label" >Muscle Group: </label>
                            <select id='ddMuscleGroup' name="muscle_group"
                                className="form-select"  onChange={e => { handleMuscleGroup(e.target.value); handleInputChange(e);  }} >
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
                                <option value="0">Select Movement</option>
                                {
                                    movementFilter &&
                                    movementFilter !== undefined ?
                                    movementFilter.map((m, index) => {
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
                                type="text"
                                name="weight"
                                value={editArray.weight}
                                onChange={handleInputChange}
                            />

                        </div >
                        <div className="mb-3">
                            <label for="reps" className="form-label" > Reps:</label>
                            
                            <input
                                className="form-control"
                                type="text"
                                name="reps"
                                value={editArray.reps}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label for="sets" className="form-label">Sets:</label>
                            <input
                                className="form-control"
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
                            <div className=" mb-4 text-center">
                                <button  type="submit" className="btn btn-primary btn-block" data-bs-toggle="modal" data-bs-target="#reg-modal">Save Workout!</button>
                            
                            </div>
                            


                            <div className="modal fade" id="reg-modal" aria-labelledby="modal-title" aria-hidden="true">
                                <div className="modal-dialog modal-sm">
                                    <div className="modal-content">
                                        <div className="model-header">
                                            <button type="button" className="Close" data-bs-dismiss="modal">x</button>
                                            <div className="mb-4 text-center">
                                                <h5 className="modal-title" id="modal-title">Workout Saved!</h5>
                                            </div>

                                        </div>
                                        <div className="model-footer">
                                            <div className="mb-4 text-center">
                                            <button type="button" data-bs-dismiss="modal" className="btn btn-primary m-2" onClick={refreshPage}>Add another workout</button>
                                                <button type="button" data-bs-dismiss="modal" className="btn btn-primary m-2" onClick={() => navigate("/workouthistory")}>View workout history</button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </form>
                </div>
            </div>
        </div>

        </div>




    );
}

export default EditWorkout;