import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEllipsisV } from 'react-icons/fa';

const AdminHome = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("users");

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const dummyUsers = [
    { id: 1, name: "John Doe", avatar: "https://via.placeholder.com/50" },
    { id: 2, name: "Jane Smith", avatar: "https://via.placeholder.com/50" },
    { id: 3, name: "Alice Johnson", avatar: "https://via.placeholder.com/50" },
  ];

  const dummyReports = [
    { id: 1, name: "Spam Account", avatar: "https://via.placeholder.com/50" },
    { id: 2, name: "Inappropriate Content", avatar: "https://via.placeholder.com/50" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <nav className="w-64 bg-gray-800 text-white p-4 min-h-screen flex flex-col">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-4">
          <li 
            className={`cursor-pointer p-2 rounded ${activeTab === "users" ? "bg-gray-700" : "hover:bg-gray-700"}`} 
            onClick={() => setActiveTab("users")}
          >
            Users
          </li>
          <li 
            className={`cursor-pointer p-2 rounded ${activeTab === "reports" ? "bg-gray-700" : "hover:bg-gray-700"}`} 
            onClick={() => setActiveTab("reports")}
          >
            Reports
          </li>
          <li className="cursor-pointer hover:bg-gray-700 p-2 rounded text-red-400" onClick={handleLogout}>Logout</li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-4">Admin Home</h1>
        
        {activeTab === "users" && (
          <>
            <h2 className="text-2xl font-semibold mb-2">User List</h2>
            <ul className="bg-white p-4 rounded shadow-md">
              {dummyUsers.map(user => (
                <li key={user.id} className="flex justify-between items-center p-2 border-b last:border-b-0">
                  <div className="flex items-center space-x-2">
                    <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                    <span>{user.name}</span>
                  </div>
                  <button className="text-gray-600 hover:text-gray-800">
                    <FaEllipsisV />
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}

        {activeTab === "reports" && (
          <>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Reported Accounts</h2>
            <ul className="bg-white p-4 rounded shadow-md">
              {dummyReports.map(report => (
                <li key={report.id} className="flex justify-between items-center p-2 border-b last:border-b-0">
                  <div className="flex items-center space-x-2">
                    <img src={report.avatar} alt={report.name} className="w-10 h-10 rounded-full" />
                    <span>{report.name}</span>
                  </div>
                  <button className="text-gray-600 hover:text-gray-800">
                    <FaEllipsisV />
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminHome;
