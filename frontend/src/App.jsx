import Navbar from "./components/navbar";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import Settings from "./pages/Settings";
import ProfilePage from "./pages/ProfilePage";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Setting" element={<SettingPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        
        

        
      </Routes>
    </div>
  );
};
export default App;