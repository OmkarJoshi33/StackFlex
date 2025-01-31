import React, { useState } from "react";
import { HiHome, HiSearch } from "react-icons/hi";
import { IoIosCreate, IoIosNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { MdSms } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoCloseCircleOutline } from "react-icons/io5"; // Cross icon
import { NavLink, useNavigate } from "react-router-dom";

const LeftBar = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    bio: "",
    avatar: null, // Store image file instead of URL
     // Default preview
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/login");
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        avatar: file,
        avatarPreview: URL.createObjectURL(file), // Show preview
      }));
    }
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveProfile = () => {
    alert("Profile updated successfully!");
    setShowProfileForm(false);
  };

  return (
    <div className="h-screen w-full flex">
      <div className="flex flex-col w-full h-full bg-gray-300 text-black p-4">
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">StackFlex</h1>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col flex-grow mt-8 gap-2">
          <NavLink
            to="/home/mainhome"
            className={({ isActive }) =>
              `flex items-center p-2 hover:bg-gray-400 rounded-lg ${
                isActive ? "bg-gray-400" : ""
              }`
            }
          >
            <HiHome className="text-lg" />
            <span className="ml-1">Home</span>
          </NavLink>

          <NavLink
            to="/home/Search"
            className={({ isActive }) =>
              `flex items-center p-2 hover:bg-gray-400 rounded-lg ${
                isActive ? "bg-gray-400" : ""
              }`
            }
          >
            <HiSearch className="text-lg" />
            <span className="ml-1">Search</span>
          </NavLink>

          <NavLink
            to="/home/Create"
            className={({ isActive }) =>
              `flex items-center p-2 hover:bg-gray-400 rounded-lg ${
                isActive ? "bg-gray-400" : ""
              }`
            }
          >
            <IoIosCreate className="text-lg" />
            <span className="ml-1">Create</span>
          </NavLink>

          <NavLink
            to="/home/Notifications"
            className={({ isActive }) =>
              `flex items-center p-2 hover:bg-gray-400 rounded-lg ${
                isActive ? "bg-gray-400" : ""
              }`
            }
          >
            <IoIosNotifications className="text-lg" />
            <span className="ml-1">Notifications</span>
          </NavLink>

          <NavLink
            to="/home/Message"
            className={({ isActive }) =>
              `flex items-center p-2 hover:bg-gray-400 rounded-lg ${
                isActive ? "bg-gray-400" : ""
              }`
            }
          >
            <MdSms className="text-lg" />
            <span className="ml-1">Messages</span>
          </NavLink>

          <NavLink
            to="/home/Profile"
            className={({ isActive }) =>
              `flex items-center p-2 hover:bg-gray-400 rounded-lg ${
                isActive ? "bg-gray-400" : ""
              }`
            }
          >
            <CgProfile className="text-lg" />
            <span className="ml-1">Profile</span>
          </NavLink>
        </div>

        {/* Settings Section */}
        <div className="relative mt-auto">
          <button
            className="flex items-center w-full p-2 hover:bg-gray-400 rounded-lg"
            onClick={() => setShowSettings(!showSettings)}
          >
            <IoMdSettings className="text-lg" />
            <span className="ml-1">Settings</span>
          </button>

          {showSettings && (
            <div className="absolute bottom-10 left-0 bg-white border rounded shadow-lg w-full z-50">
              <button
                className="w-full px-4 py-2 text-left hover:bg-gray-200"
                onClick={() => setShowProfileForm(true)}
              >
                Update Profile
              </button>
              <button
                className="w-full px-4 py-2 text-left hover:bg-gray-200"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Profile Form Popup */}
      {showProfileForm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-1/3 relative shadow-lg">
            {/* Close Button */}
            <button
              onClick={() => setShowProfileForm(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              <IoCloseCircleOutline size={25} />
            </button>

            {/* Profile Picture Upload */}
            <div className="flex justify-center">
              <label htmlFor="avatarUpload" className="cursor-pointer">
                <img
                  src={formData.avatarPreview}
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
                />
              </label>
              <input
                type="file"
                id="avatarUpload"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
            </div>

            {/* Username Input */}
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleFormChange}
              className="w-full my-2 p-2 border rounded"
              placeholder="Enter your username"
            />

            {/* Bio Input */}
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleFormChange}
              className="w-full my-2 p-2 border rounded"
              placeholder="Enter your bio"
            />

            {/* Save Button */}
            <button
              onClick={handleSaveProfile}
              className="mt-4 w-full py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftBar;
