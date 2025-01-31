import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing icons from react-icons

const Signup = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling signup without backend interaction
    console.log("Signup logic would go here.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white border rounded-lg shadow-md p-8 w-full max-w-md sm:max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="fName"
              placeholder="First name"
              value={formData.fName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
              autoComplete="current-fname"
            />
          </div>
          <div>
            <input
              type="text"
              name="lName"
              placeholder="Last name"
              value={formData.lName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
              autoComplete="current-lname"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
              autoComplete="current-email"
            />
          </div>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
              autoComplete="current-username"
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
          <div className="relative">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
            >
              {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {successMessage && (
            <p className="text-green-500 text-sm mt-2">{successMessage}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg transition ${
              loading
                ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                : "bg-gray-500 text-white hover:bg-gray-600"
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-500 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-gray-500 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
