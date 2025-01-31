import React, { useState } from "react";
import LeftBar from "../SideBar/LeftBar";
import { CgSearch } from "react-icons/cg";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);

  // Sample user data
  

  // Handle search functionality
  const handleSearch = (e) => {
    e.preventDefault();
    const filteredResults = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.username.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <div className="flex h-screen w-[35%]">
        <LeftBar />
      </div>

      {/* Main Content */}
      <div className="flex bg-gray-200 h-screen w-screen">
        <div className="flex flex-col bg-slate-200 w-full items-center">
          <div className="post-section flex flex-col items-center bg-slate-300 h-screen w-[60%] rounded-lg">
            {/* Search Bar */}
            <div className="searchbar my-6 h-12 w-full flex justify-center">
              <div className="searchbar-input flex w-[90%] bg-slate-500 h-auto rounded-xl items-center align-middle focus-within:border-blue-500 focus-within:outline-none">
                <CgSearch className="flex size-6 mx-3 text-white align-middle" />
                <form onSubmit={handleSearch} className="flex w-full">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="searchbar-input-field bg-inherit outline-none text-white h-10 w-5/6"
                  />
                  <button type="submit" className="hidden"></button>
                </form>
              </div>
            </div>

            {/* Suggestions Section */}
            <div className="suggestion w-[90%] bg-gray-100 rounded-lg p-4 shadow-md">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Suggestions</h2>
              {results.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {results.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center gap-4 p-4 bg-white hover:bg-gray-100 rounded-lg border border-gray-200"
                    >
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-12 h-12 rounded-full border border-gray-300"
                      />
                      <div>
                        <h3 className="font-bold text-gray-800">{user.name}</h3>
                        <p className="text-sm text-gray-500">{user.username}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No results found. Try searching for someone else.</p>
              )}
            </div>

            {/* Suggested Posts Placeholder */}
            <div className="suggestedposts w-[90%] mt-6 bg-gray-100 rounded-lg p-4 shadow-md">
              <h2 className="text-lg font-bold text-gray-800">Suggested Posts</h2>
              <p className="text-gray-500 mt-2">No posts to display right now.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
