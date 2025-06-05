import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/login.jsx";
import Register from "../pages/Register.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;