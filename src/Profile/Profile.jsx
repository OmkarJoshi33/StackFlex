import React, { useState, useEffect, useContext } from "react";
import LeftBar from "../SideBar/LeftBar";
import { UserContext } from "../component/userContext.jsx";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState("posts");
  const [profileData, setProfileData] = useState({
    username: "",
    bio: "Software Developer",
    avatar: "",
  });

  // Mock data for followers and following
  const followers = [
    { username: "user1", avatar: "https://via.placeholder.com/50", following: false },
    { username: "user2", avatar: "https://via.placeholder.com/50", following: true },
    { username: "user3", avatar: "https://via.placeholder.com/50", following: false },
  ];

  const following = [
    { username: "user4", avatar: "https://via.placeholder.com/50", following: true },
    { username: "user5", avatar: "https://via.placeholder.com/50", following: true },
  ];

  // Load the username and other profile info from localStorage or UserContext
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setProfileData((prev) => ({ ...prev, username: storedUsername }));
    } else if (user?.username) {
      setProfileData((prev) => ({ ...prev, username: user.username }));
    }
  }, [user]);

  return (
    <div className="flex h-screen w-screen">
      <div className="flex h-screen w-[35%]">
        <LeftBar />
      </div>

      {/* Main Content */}
      <div className="flex bg-gray-200 h-screen w-screen">
        <div className="flex flex-col bg-slate-200 w-full items-center">
          <div className="post-section flex flex-col items-center bg-slate-300 h-screen w-[60%] rounded-lg">
            
            {/* Profile Header */}
            <div className="w-full max-w-2xl bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-4">
                {/* Profile Image */}
                <img
                  src={profileData.avatar || "https://via.placeholder.com/150"} // Default image if no avatar
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-2 border-gray-300"
                />

                {/* Profile Details */}
                <div className="flex-1">
                  <div className="text-xl font-bold">{profileData.username}</div>
                  <div className="text-gray-500 mt-1">{profileData.bio}</div>
                  <div className="flex gap-8 mt-2">
                    <div>
                      <div className="font-bold">12</div>
                      <div>Posts</div>
                    </div>
                    <div>
                      <div className="font-bold">2.5k</div>
                      <div>Followers</div>
                    </div>
                    <div>
                      <div className="font-bold">1.2k</div>
                      <div>Following</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="w-full h-full max-w-2xl bg-gray-100 mt-4 rounded-lg shadow-md overflow-scroll scroll-m-1">
              <div className="flex justify-evenly border-b border-gray-300">
                <button
                  className={`flex-1 py-2 text-center ${
                    activeTab === "posts" ? "border-b-2 border-gray-500 font-bold" : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("posts")}
                >
                  Posts
                </button>
                <button
                  className={`flex-1 py-2 text-center ${
                    activeTab === "reels" ? "border-b-2 border-gray-500 font-bold" : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("reels")}
                >
                  Reels
                </button>
                <button
                  className={`flex-1 py-2 text-center ${
                    activeTab === "followers" ? "border-b-2 border-gray-500 font-bold" : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("followers")}
                >
                  Followers
                </button>
                <button
                  className={`flex-1 py-2 text-center ${
                    activeTab === "following" ? "border-b-2 border-gray-500 font-bold" : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("following")}
                >
                  Following
                </button>
              </div>

              {/* Content */}
              <div className="p-4 h-full bg-gray-200 w-full">
                <div className={`grid gap-4 ${activeTab === "posts" || activeTab === "reels" ? "grid-cols-3" : "grid-cols-1"}`}>
                  
                  {activeTab === "posts" ? (
                    [...Array(6)].map((_, idx) => (
                      <div key={idx} className="w-full h-32 bg-gray-300 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400">Post {idx + 1}</span>
                      </div>
                    ))
                  ) : activeTab === "reels" ? (
                    [...Array(6)].map((_, idx) => (
                      <div key={idx} className="w-full h-32 bg-gray-300 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400">Reel {idx + 1}</span>
                      </div>
                    ))
                  ) : activeTab === "followers" ? (
                    <div className="w-full">
                      {followers.map((follower, idx) => (
                        <div key={idx} className="w-full h-16 bg-gray-300 rounded-lg flex items-center justify-between px-4 mb-2">
                          <div className="flex items-center space-x-3">
                            <img src={follower.avatar} alt={follower.username} className="w-12 h-12 rounded-full border-2 border-gray-400" />
                            <span className="text-gray-600">{follower.username}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : activeTab === "following" ? (
                    <div className="w-full">
                      {following.map((follow, idx) => (
                        <div key={idx} className="w-full h-16 bg-gray-300 rounded-lg flex items-center justify-between px-4 mb-2">
                          <div className="flex items-center space-x-3">
                            <img src={follow.avatar} alt={follow.username} className="w-12 h-12 rounded-full border-2 border-gray-400" />
                            <span className="text-gray-600">{follow.username}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
