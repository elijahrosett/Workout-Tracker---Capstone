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
import EditWorkout from "./components/EditWorkout/EditWorkout";






function App() {
  const [userWorkouts, setUserWorkouts] = useState([])
  const [user, token] = useAuth();
  const [editInfo, setEditInfo] = useState([])

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

  async function handleDelete(pk) {
    try {
        let response = await axios.delete(`http://127.0.0.1:8000/api/workout/${pk.id}/`
         );
        console.log(response, `deleted id " ${pk}`)
        fetchAllUserWorkouts();
    }
    catch (ex) {
        console.log('there is an error', ex)
    }
}

async function handleEdit(pk) {
  try {
      let response = await axios.put(`http://127.0.0.1:8000/api/workout/${pk}/`
       );
      console.log(response)
      fetchAllUserWorkouts();
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
        <Route path="workouthistory"  element={<PrivateRoute><WorkoutHistory editInfo={editInfo} setEditInfo={setEditInfo} handleEdit={handleEdit} handleDelete={handleDelete} userWorkouts={userWorkouts} setUserWorkouts={setUserWorkouts} fetchAllUserWorkouts={fetchAllUserWorkouts} /></PrivateRoute>} />
        <Route path="edit" element={<PrivateRoute><EditWorkout editInfo={editInfo}  /></PrivateRoute>} />
        
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
