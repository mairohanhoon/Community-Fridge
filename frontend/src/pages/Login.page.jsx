import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils.js";
import { useUserContext } from "@/context/user.context.jsx";
import { SparklesText } from "@/components/magicui/sparkles-text.jsx";

const LoginPage = () => {
  const navigate = useNavigate();
  const UserContext = useUserContext();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return handleError("All feilds are required");
    }
    try {
      const url = `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/auth/login`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          password,
          email,
        }),
      });
      const result = await response.json();
      console.log(result);
      if (result.success) {
        handleSuccess(result.message);
        UserContext.setUserID(result._id);
        UserContext.setUserID(result.role);
        setTimeout(() => {
          navigate("/home");
        }, 500);
      } else {
        handleError(result.message);
      }
    } catch (error) {
      console.log("Frontend Login Error : ", error);
    }
    console.log("Login");
  };
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-[#1a1a1a] px-4 sm:px-6"
      style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}
    >
      <SparklesText className='text-white m-10'>Welcome Back</SparklesText>
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">
          LogIn
        </h2>

        <form onSubmit={(e) => handleLogin()} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="button"
            className="w-full bg-blue-500 text-white py-3 text-sm sm:text-base rounded-lg hover:bg-blue-600 transition"
            onClick={(e) => handleLogin(e)}
          >
            LogIn
          </button>
          <button
            type="button"
            className="w-full bg-green-500 text-white py-3 text-sm sm:text-base rounded-lg hover:bg-green-600 transition"
            onClick={(e) => navigate("/signup")}
          >
            Sign Up
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
