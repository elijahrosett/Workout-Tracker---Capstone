// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from 'react';


// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddWorkoutPage from "./pages/AddWorkoutPage/AddWorkoutPage";
import Dropdown from "./components/Dropdown/Dropdown";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import WorkoutHistory from "./pages/WorkoutHistory/WorkoutHistory";


function App() {
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
        <Route path="dropdown" element={<Dropdown/>} />
        <Route path="addworkout" element={<PrivateRoute><AddWorkoutPage /></PrivateRoute>} />
        <Route path="workouthistory" element={<PrivateRoute><WorkoutHistory /></PrivateRoute>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
