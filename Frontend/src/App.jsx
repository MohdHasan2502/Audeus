import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// Lazy load components to improve performance
const Header = lazy(() => import("./components/Header"));
const MainImg = lazy(() => import("./components/MainImg"));
const Videos = lazy(() => import("./components/Videos"));
const Lifelike = lazy(() => import("./components/Lifelike"));
const BlueBackground = lazy(() => import("./components/BlueBackground"));
const FrequentQuestions = lazy(() => import("./components/FrequentQuestions"));
const Footer = lazy(() => import("./components/Footer"));
const Login = lazy(() => import("./components/Login"));
const Signup = lazy(() => import("./components/Signup"));
const UploadFile = lazy(() => import("./components/UploadFile"));
const Reader = lazy(() => import("./components/Reader"));

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication token on app load
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
                <MainImg />
                <Videos />
                <Lifelike />
                <BlueBackground />
                <FrequentQuestions />
                <Footer />
              </>
            }
          />
          {/* Login Route */}
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/uploadfile" /> : <Login setIsAuthenticated={setIsAuthenticated} />}
          />
          {/* Signup Route */}
          <Route path="/signup" element={<Signup />} />
          {/* Protected Routes */}
          <Route
            path="/uploadfile/*"
            element={isAuthenticated ? <ProtectedRoutes /> : <Navigate to="/login" />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

// Nested Routes for UploadFile and Reader
const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UploadFile />} />
      <Route path="reader" element={<Reader />} />
    </Routes>
  );
};

export default App;
