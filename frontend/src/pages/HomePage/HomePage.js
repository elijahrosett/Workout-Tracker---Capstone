import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./HomePage.css";
import { Button } from 'bootstrap';



const HomePage = () => {

  
  const [user, token] = useAuth();
  

  
  return (
    <div>
    <header className="text-center">
      <h1>{user.first_name}'s Workout Tracker</h1>
    </header>
    <div className="background-body">
   
    </div>
    </div>
    
      
      
      
      
      
         
      
    
  )

}

export default HomePage;
