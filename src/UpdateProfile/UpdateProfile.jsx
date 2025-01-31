import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Simulating successful update logic
    alert("Profile updated successfully!");
    console.log("Updated Profile Data:", formData);

    // Navigate to login page
    navigate("/login");

    // Clear the form
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setError("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Update Profile</h2>
        {error && (
          <div className="text-red-500 text-sm mb-4 text-center">{error}</div>
        )}
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Enter a new password"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
