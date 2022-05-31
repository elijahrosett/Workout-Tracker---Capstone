import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import Dropdown2 from "../../components/Dropdown2/Dropdown2";
import AddWorkoutPage from "../AddWorkoutPage/AddWorkoutPage";

const HomePage = () => {

  
  const [user, token] = useAuth();
  

  
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      
      
      
         
      
    </div>
  );
};

export default HomePage;
