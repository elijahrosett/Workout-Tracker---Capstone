import React, { useEffect, useState } from 'react';


const Dropdown2 = (props) => {

    const muscleGroups = [
        { id: "1", value: 'Legs' },

        { id: "2", value: 'Arms' },

        { id: "3", value: 'Shoulders' },

        { id: "4", value: 'Chest' },

        { id: "5", value: 'Abs' },
    ]
    const movements = [
        { id: "1", muscleGroupId: "1", value: "squat" },
        { id: "2", muscleGroupId: "2", value: "bicep curl" },
        { id: "3", muscleGroupId: "3", value: "military press" },
        { id: "4", muscleGroupId: "4", value: "bench press" },
        { id: "5", muscleGroupId: "5", value: "sit ups" }
    ]
    const [muscleGroup, setMuscleGroup] = useState([]);
    const [movement, setMovement] = useState([]);

    useEffect(() => {
        setMuscleGroup(muscleGroups);
    }, [])

    const handleMuscleGroup = (id) => {
        const dt = movements.filter(x => x.muscleGroupId === id);
        setMovement(dt);
        console.log(dt);
        
    }

    return (
        <div className="app">
            <select id='ddMuscleGroup' className="form-control select-class" onChange={(e) => handleMuscleGroup(e.target.value)}>
                <option value="0">Select Muscle Group</option>
                {
                    muscleGroup &&
                        muscleGroup !== undefined ?
                        muscleGroup.map((group, index) => {
                            return (
                                <option key={index} value={group.id}>{group.value}</option>
                            )

                        })
                        : "No muscle group"
                }

            </select>
            <br></br>
            <select id='ddMovement' className="form-control select-class" >
                <option value="0">Select movement</option>
                {
                        movement &&
                        movement !== undefined ?
                        movement.map((m, index) => {
                            return (
                                <option key={index} value={m.id}>{m.value}</option>
                            )

                        })
                        : "No movement"
                }

            </select>
        </div>


    );
}

export default Dropdown2;