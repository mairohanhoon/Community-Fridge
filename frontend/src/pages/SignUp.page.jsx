import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils.js";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const handleSignup = async (e) => {
    e.preventDefault();
    if (!email || !fullName || !password || !role) {
      return handleError("All feilds are required");
    }
    try {
    } catch (error) {
      console.log("Frontend SignUp Error : ", error);
    }
    console.log("SignUp");
  };
  console.log(fullName, password, email, role);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800"></h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <select
            className="w-full px-4 py-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="ngo">NGO</option>
            <option value="donor">Donor</option>
          </select>
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="w-full bg-green-500 text-white py-3 text-sm sm:text-base rounded-lg hover:bg-green-600 transition"
            onClick={(e) => handleSignup(e)}
          >
            Sign Up
          </button>
          <button
            type="button"
            className="w-full bg-blue-500 text-white py-3 text-sm sm:text-base rounded-lg hover:bg-blue-600 transition"
            onClick={(e) => navigate("/login")}
          >
            LogIn
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUpPage;
