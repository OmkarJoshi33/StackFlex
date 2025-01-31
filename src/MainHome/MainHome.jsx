import React, { useState, useEffect } from "react";
import LeftBar from "../SideBar/LeftBar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiSolidLike } from "react-icons/bi";
import { FaComment, FaShare } from "react-icons/fa";

const Home = () => {
  const [activePost, setActivePost] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [commentInputVisible, setCommentInputVisible] = useState(false);
  const [commentText, setCommentText] = useState("");

  const friendSuggestions = [
    {
      id: 1,
      username: "paul_phoenix",
    },
  ];

  const toggleLike = (postId) => {
    setActivePost(activePost === postId ? null : postId);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handlePostComment = () => {
    if (commentText.trim()) {
      console.log("Posted Comment:", commentText);
      setCommentText("");
    }
  };

  return (
    <div className="relative flex h-screen w-screen">
      {/* Left Sidebar */}
      <div className="flex h-screen w-[20%] bg-gray-100">
        <LeftBar />
      </div>

      {/* Main Content */}
      <div className="flex bg-gray-200 h-full w-[60%] flex-col">
        {/* Post Section */}
        <div className="flex flex-col h-full w-full overflow-scroll">
          <div className="post-section flex flex-col h-full gap-4 p-4">
            <div
              className={`post bg-white shadow rounded-lg p-4 transition-all duration-300`}
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <img
                    src=""
                    alt="User Avatar"
                    className="rounded-full"
                  />
                  <span className="font-semibold">john_doe</span>
                </div>
                <div className="relative">
                  <button onClick={toggleOptions}>
                    <BsThreeDotsVertical />
                  </button>
                  {showOptions && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
                      <button className="w-full px-4 py-2 text-left hover:bg-gray-200">
                        Unfollow
                      </button>
                      <button className="w-full px-4 py-2 text-left hover:bg-gray-200">
                        Report Post
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full h-[70vh] bg-black rounded-lg">
                  <img src="" alt="img" className="h-[95%]" />
                </div>
              </div>
              <div className="flex mt-4 gap-4">
                <button
                  className={`flex items-center gap-2 ${
                    activePost === 1 ? "text-pink-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleLike(1)}
                >
                  <BiSolidLike className="size-6" />
                </button>
                <button
                  className="flex items-center gap-2 text-gray-500"
                  onClick={() => setCommentInputVisible(!commentInputVisible)}
                >
                  <FaComment className="size-6" />
                </button>
                <button className="flex items-center gap-2 text-gray-500">
                  <FaShare className="size-6" />
                </button>
              </div>
              <div className="mt-4">Description</div>
              {commentInputVisible && (
                <div className="mt-4 flex gap-2">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="flex-grow border p-2 rounded-md"
                  />
                  <button
                    onClick={handlePostComment}
                    className="bg-gray-500 text-white px-4 py-2 rounded-md"
                  >
                    Post
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="right-bar bg-white w-[20%] p-4 shadow-lg">
        <h2 className="font-semibold text-lg mb-4">Suggestions for You</h2>
        {friendSuggestions.map((friend) => (
          <div
            key={friend.id}
            className="friend-suggestion flex items-center gap-3 mb-4"
          >
            <img
              src={friend.image}
              alt={friend.username}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-medium">{friend.username}</p>
              <button className="text-gray-500 text-sm">Follow</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
