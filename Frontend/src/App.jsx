import { useState, useEffect } from "react";
import Header from "../src/components/Header";
import HeaderTwo from "../src/components/HeaderTwo.jsx";
import MainImg from "../src/components/MainImg";
import Videos from "../src/components/Videos";
import Lifelike from "../src/components/Lifelike";
import BlueBackground from "../src/components/BlueBackground";
import FrequentQuestions from "./components/FrequentQuestions.jsx";
import Footer from "../src/components/Footer";
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../src/components/Login.jsx";
import Signup from "../src/components/Signup.jsx";
import UploadFile from "../src/components/UploadFile.jsx";
=======
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../src/components/Login.jsx";
import Signup from "../src/components/Signup.jsx";
import axios from "axios";
>>>>>>> 8aa62bad2ef001eb2148408f4f3324c5807d11a3

const App = () => {
  // State for authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for token in localStorage on initial load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
<<<<<<< HEAD
      <Route path="/uploadFile" element={<UploadFile />} />
=======
>>>>>>> 8aa62bad2ef001eb2148408f4f3324c5807d11a3
        <Route
          path="/"
          element={
            <>
              <Header />
<<<<<<< HEAD
              <HeaderTwo
                isAuthenticated={isAuthenticated}
                handleLogout={handleLogout}
              />

=======
              <HeaderTwo 
                isAuthenticated={isAuthenticated} 
                handleLogout={handleLogout} 
              />
>>>>>>> 8aa62bad2ef001eb2148408f4f3324c5807d11a3
              <MainImg />
              <Videos />
              <Lifelike />
              <BlueBackground />
              <FrequentQuestions />
              <Footer />
            </>
          }
        />

        {/* Login Page Route */}
<<<<<<< HEAD
        <Route
          path="/login"
=======
        <Route 
          path="/login" 
>>>>>>> 8aa62bad2ef001eb2148408f4f3324c5807d11a3
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <Login setIsAuthenticated={setIsAuthenticated} />
            )
<<<<<<< HEAD
          }
=======
          } 
>>>>>>> 8aa62bad2ef001eb2148408f4f3324c5807d11a3
        />

        {/* Signup Page Route */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
