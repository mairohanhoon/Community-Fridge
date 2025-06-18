import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/Home.page.jsx";
import LoginPage from "./pages/Login.page.jsx";
import SignUpPage from "./pages/SignUp.page.jsx";
import { useUserContext } from "./context/user.context.jsx";
import LoadingPage from "./pages/Loading.page.jsx";
import { Navigate } from "react-router-dom";
import DonationsPage from "./pages/Donation.page.jsx";
import MyDonationPage from "./pages/MyDonation.page.jsx";
import AllDonations from "./pages/AllDonations.page.jsx";
import MyPickupsPage from "./pages/MyPickups.page.jsx";
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
  }, [UserContext.role, UserContext._id]);
  console.log(UserContext.userID + " " + UserContext.role);
  if (UserContext.loading) {
    return <LoadingPage />;
  }
  return (
    <div className="flex flex-col bg-[#1a1a1a]">
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
        <Route
          path="/donation"
          element={
            UserContext.role === "donor" ? (
              <DonationsPage />
            ) : (
              <Navigate to="/home" />
            )
          }
        />
        <Route
          path="/my-donations"
          element={
            UserContext.role === "donor" ? (
              <MyDonationPage />
            ) : (
              <Navigate to="/home" />
            )
          }
        />
        <Route
          path="/donations"
          element={
            UserContext.role === "ngo" ? (
              <AllDonations/>
            ) : (
              <Navigate to="/home" />
            )
          }
        />
        <Route
          path="/my-pickups"
          element={
            UserContext.role === "ngo" ? (
              <MyPickupsPage/>
            ) : (
              <Navigate to="/home" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
