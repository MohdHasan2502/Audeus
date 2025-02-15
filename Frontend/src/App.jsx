import { useState, useEffect } from "react";
import Header from "../src/components/Header";
import HeaderTwo from "../src/components/HeaderTwo.jsx";
import MainImg from "../src/components/MainImg";
import Videos from "../src/components/Videos";
import Lifelike from "../src/components/Lifelike";
import BlueBackground from "../src/components/BlueBackground";
import FrequentQuestions from "./components/FrequentQuestions.jsx";
import Footer from "../src/components/Footer";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../src/components/Login.jsx";
import Signup from "../src/components/Signup.jsx";
import axios from "axios";

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
        <Route
          path="/"
          element={
            <>
              <Header />
              <HeaderTwo 
                isAuthenticated={isAuthenticated} 
                handleLogout={handleLogout} 
              />
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
        <Route 
          path="/login" 
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <Login setIsAuthenticated={setIsAuthenticated} />
            )
          } 
        />

        {/* Signup Page Route */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
