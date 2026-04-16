import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import Settings from "./pages/Settings";
import HomePage from "./pages/HomePage";

// assume you are getting authUser from context or state
import { useAuthStore } from "./store/useAuthStore";

function App() {
  const { authUser } = useAuthStore();

  return (
    <div>
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={authUser ? <ProfilePage /> : <Navigate to="/login" />}
        />

        {/* Settings */}
        <Route
          path="/settings"
          element={authUser ? <Settings /> : <Navigate to="/login" />}
        />

      </Routes>
    </div>
  );
}

export default App;