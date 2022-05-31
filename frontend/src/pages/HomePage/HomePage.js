import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import Dropdown2 from "../../components/Dropdown2/Dropdown2";
import AddWorkoutPage from "../AddWorkoutPage/AddWorkoutPage";

const HomePage = () => {
  const items= [
    {id: 1, value: 'Legs'},
    
    {id: 2, value: 'Arms'},
    
    {id: 3, value: 'Shoulders'},
    
    {id: 4, value: 'Chest'},

    {id: 5, value: 'Abs'},

  ]
  
  const [user, token] = useAuth();
  

  
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      
      
      
         
      
    </div>
  );
};

export default HomePage;
