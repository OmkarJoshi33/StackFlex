import React, { useState } from "react";
import LeftBar from "../SideBar/LeftBar";

const Create = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postImage, setPostImage] = useState(null);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    // Logic to handle post submission (e.g., send data to server)
    console.log({
      title: postTitle,
      description: postDescription,
      image: postImage,
    });
    // Reset form
    setPostTitle("");
    setPostDescription("");
    setPostImage(null);
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
          <div className="post-section flex flex-col items-center bg-slate-300 h-screen w-[60%] rounded-lg p-6">
            {/* Page Header */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Create a Post</h2>

            {/* Post Form */}
            <form
              onSubmit={handlePostSubmit}
              className="flex flex-col w-[90%] gap-4 bg-gray-100 p-6 rounded-lg shadow-md"
            >
              {/* Title Input */}
              <div className="flex flex-col">
                <label className="text-gray-700 font-semibold mb-2" htmlFor="title">
                  Post Title
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Enter post title"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  className="p-2 rounded-md bg-gray-200 outline-none focus:ring-2 focus:ring-slate-400"
                  required
                />
              </div>

              {/* Description Input */}
              <div className="flex flex-col">
                <label className="text-gray-700 font-semibold mb-2" htmlFor="description">
                  Post Description
                </label>
                <textarea
                  id="description"
                  placeholder="Write something about your post..."
                  value={postDescription}
                  onChange={(e) => setPostDescription(e.target.value)}
                  className="p-2 rounded-md bg-gray-200 outline-none focus:ring-2 focus:ring-slate-400"
                  rows="4"
                  required
                ></textarea>
              </div>

              {/* Image Upload */}
              <div className="flex flex-col">
                <label className="text-gray-700 font-semibold mb-2" htmlFor="image">
                  Upload Image
                </label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={(e) => setPostImage(e.target.files[0])}
                  className="p-2 rounded-md bg-gray-200 outline-none focus:ring-2 focus:ring-slate-400"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-slate-500 text-white font-semibold py-2 rounded-lg hover:bg-slate-600 transition-all"
              >
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
