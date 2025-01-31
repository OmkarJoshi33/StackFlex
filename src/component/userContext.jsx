import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Check if there's any user data in localStorage
  const savedUser = localStorage.getItem("user");
  const initialUser = savedUser ? JSON.parse(savedUser) : {
    userId: null,
    username: "",
    role: "",
    token: "", // Default empty token
  };

  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    // Whenever the user state changes, update localStorage
    if (user.userId) {
      localStorage.setItem("user", JSON.stringify(user)); // Store user data in localStorage
    } else {
      localStorage.removeItem("user"); // Clear user data if user logs out
    }
  }, [user]); // Trigger this effect when 'user' changes

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
