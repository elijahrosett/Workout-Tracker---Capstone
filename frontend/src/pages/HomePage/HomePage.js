import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import DropDown from "../../components/Dropdown/Dropdown";
import AddWorkoutPage from "../AddWorkoutPage/AddWorkoutPage";

const HomePage = () => {
  const items= [
    {id: 1, value: 'Legs'},
    
    {id: 2, value: 'Arms'},
    
    {id: 1, value: 'Shoulders'},
    
    {id: 1, value: 'Chest'},

    {id: 1, value: 'Abs'},

  ]
  
  const [user, token] = useAuth();
  

  
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <DropDown title="select a muscle group" items={items} />
      
      
         
      
    </div>
  );
};

export default HomePage;
