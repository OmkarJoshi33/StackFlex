import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("user");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect based on activeTab
    if (activeTab === "admin") {
      navigate("/adminhome");
    } else {
      navigate("/home/Profile");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white border rounded-lg shadow-md p-8 w-full max-w-md sm:max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Log In</h1>
        <div className="flex justify-center space-x-4 mb-4">
          <button
            className={`py-2 px-4 ${activeTab === "user" ? "border-b-2 border-gray-500" : ""}`}
            onClick={() => setActiveTab("user")}
          >
            User
          </button>
          <button
            className={`py-2 px-4 ${activeTab === "admin" ? "border-b-2 border-gray-500" : ""}`}
            onClick={() => setActiveTab("admin")}
          >
            Admin
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="identifier"
              placeholder="Email or Username"
              value={formData.identifier}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
              autoComplete="username"
            />
          </div>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
          >
            Log In
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-500 text-sm">
            Don't have an account? <Link to="/signup" className="text-gray-500 hover:underline">Sign Up</Link>
          </p>
          {activeTab === "user" && (
            <p className="text-gray-500 text-sm">
              <Link to="/forgot-password" className="text-gray-500 hover:underline">Forgot Password?</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
