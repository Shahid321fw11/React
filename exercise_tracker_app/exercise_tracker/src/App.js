import React from 'react';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar_component"
import ExercisesList from "./components/exercises_list_component";
import EditExercise from "./components/edit_exercise_component";
import CreateExercise from "./components/create_exercise_component";
import CreateUser from "./components/create_user_component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br />
        <Routes>
          <Route path="/" element={<ExercisesList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;