import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";
import Home from "../pages/Home.jsx";

import { getToken, isTokenExpired } from "../services/authService.js";

const PrivateRoute = ({ children }) => {
  
  const token = getToken();

  if (!token || isTokenExpired(token)) {
    localStorage.removeItem("token")
    localStorage.removeItem("User")
    return <Navigate to="/login" />;  
  } 
  
  return children
  
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />

        {/* Ruta privada */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

      </Routes>
    </Router>
  );
};

export default AppRoutes;