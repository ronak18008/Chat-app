import { useEffect } from 'react';  // Added missing import
import Navbar from "./components/navbar";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import Settings from "./pages/Settings";
import ProfilePage from "./pages/ProfilePage";

import { Routes, Route } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";

const App = () => {
  const { authUser, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log("Auth User:", authUser);  // Fixed: added the variable to log

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />  // Fixed: corrected component name and path casing
        <Route path="/login" element={<LoginPage />} />  // Fixed: path casing for consistency
        <Route path="/settings" element={<Settings />} />  // Fixed: corrected component name and path casing
        <Route path="/profile" element={<ProfilePage />} />  // Fixed: path casing for consistency
      </Routes>
    </div>
  );
};

export default App;