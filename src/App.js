import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import ProfilePage from "./ProfilePage";

const App = () => {
    

  return (
    <div>
       <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user/:id" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

