import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import react from "react";
import React, { useState } from 'react';

    
 

function DropDown({props, title, items = [], multiSelect = false }) {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);


    function handleOnClick(item) {
        if (!selection.some(current => current.id === item.id)) {
            if (!multiSelect){
            setSelection([item])    
            }
            else {
                let selectionAfterRemoval = selection;
                selectionAfterRemoval = selectionAfterRemoval.filter(
                    current => current.id != item.id
                );
                setSelection(...selectionAfterRemoval);
                
            }
        }
    }

    return (
            <div
                onKeyPress = {() => toggle(!open)}
                onClick = {() => toggle(!open)}
                >
                <div>
                    <p>{title}</p>
                    </div>
                     <div>
                        <p>{open ? 'Close' : 'Open'}</p>
                        </div>
                    {open && (
                        items.map(item => (
                    <li key={item.id} >
                    <button type="button" onClick={() => handleOnClick(item)}>
                        <span>{item.value}</span>
                        

                    </button>
                </li>
                        )))} 
                     
            
            
            
            
            </div> 
            
            
    
    
        )
    
}




export default DropDown;