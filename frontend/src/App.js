// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from 'react';
import axios from "axios";


// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddWorkoutPage from "./pages/AddWorkoutPage/AddWorkoutPage";
import WorkoutHistory from "./pages/WorkoutHistory/WorkoutHistory";
import Dropdown2 from "./components/Dropdown2/Dropdown2";


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import useAuth from "./hooks/useAuth";
import DisplayWorkoutHistory from "./components/DisplayWorkoutHistory/DisplayWorkoutHistory";






function App() {
  const [userWorkouts, setUserWorkouts] = useState([])
  const [user, token] = useAuth();

  async function fetchAllUserWorkouts() {
      try {
          let response = await axios.get('http://127.0.0.1:8000/api/workout/', {
              headers: {
                  Authorization: "Bearer " + token,
              },
          });
          setUserWorkouts(response.data);
          console.log(response.data)
      }
      catch (ex) {
          console.log('there is an error', ex)
      }
  }



  useEffect(() => {
    fetchAllUserWorkouts();
    
}, [])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="dropdown2" element={<Dropdown2/>} />
        <Route path="addworkout" element={<PrivateRoute><AddWorkoutPage /></PrivateRoute>} />
        <Route path="workouthistory" element={<PrivateRoute><WorkoutHistory userWorkouts={userWorkouts}  /></PrivateRoute>} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
