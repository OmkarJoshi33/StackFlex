import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, newPassword }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong.");
      }

      setMessage("Your password has been successfully updated.");
    } catch (error) {
      console.error("Error during password update:", error);
      setError(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="bg-white border rounded-lg shadow-md p-8 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-6">Reset Password</h1>
        {message && <p className="text-green-500 text-center">{message}</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
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
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
            <button
              type="button"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
            >
              {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition"
          >
            Update Password
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">
            Remembered your password?{" "}
            <Link
              to="/login"
              className="text-gray-500 hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
