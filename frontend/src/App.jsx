import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/Home.page.jsx";
import LoginPage from "./pages/Login.page.jsx";
import SignUpPage from "./pages/SignUp.page.jsx";
import { useUserContext } from "./context/user.context.jsx";
import LoadingPage from "./pages/Loading.page.jsx";
import { Navigate } from "react-router-dom";
import { User } from "lucide-react";
function App() {
  const UserContext = useUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    async function checkLoginStatus() {
      try {
        const url = "http://localhost:8080/api/auth/userLoggedIn";
        const response = await fetch(url, {
          method: "GET",
          credentials: "include", // if you need cookies
          headers: {
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();

        if (result.success) {
          UserContext.setRole(result?.decoded?.role);
          UserContext.setUserID(result?.decoded?._id);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error checking login status", error);
      } finally {
        setTimeout(() => {
          UserContext.setLoading(false);
        }, 600);
      }
    }
    checkLoginStatus();
  }, []);
  console.log(UserContext.userID + " " + UserContext.role);
  if (UserContext.loading) {
    return <LoadingPage />;
  }
  return (
    <div className="flex flex-col">
      <Routes>
        <Route
          path="/home"
          element={UserContext.userID ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/"
          element={UserContext.userID ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={UserContext.userID ? <Navigate to="/home" /> : <LoginPage />}
        />
        <Route
          path="/signup"
          element={
            UserContext.userID ? <Navigate to="/home" /> : <SignUpPage />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
