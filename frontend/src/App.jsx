import { Routes, Route, Navigate } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import Settings from "./pages/Settings";
import HomePage from "./pages/HomePage";
import { Loader } from "lucide-react";
import { useEffect } from "react";

import { Toaster } from "react-hot-toast";

// assume you are getting authUser from context or state
import { useAuthStore } from "./store/useAuthStore";
import { useThemeStore } from "./store/useThemeStore";

function App() {
  const { authUser, isCheckingAuth, checkAuth, OnlineUsers} = useAuthStore();
 const { theme } = useThemeStore();

 console.log({ OnlineUsers})

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin" />
    </div>
  );

  return (
    <div data-theme={theme}>
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />

        {/* Signup */}
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
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
      <Toaster />
    </div>
  );
}

export default App;