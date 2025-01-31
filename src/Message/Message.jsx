import React, { useState } from "react";
import LeftBar from "../SideBar/LeftBar";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  // Sample message data
  const chats = [
    { id: 1, name: "John Doe", lastMessage: "Hey! How are you?", avatar: "https://via.placeholder.com/40" },
    
  ];

  const messages = {
    1: [
      { from: "John Doe", content: "Hey! How are you?" },
      { from: "Me", content: "I'm good! How about you?" },
    ],
    2: [
      { from: "Jane Smith", content: "Let's catch up tomorrow!" },
      { from: "Me", content: "Sure! What time works for you?" },
    ],
    3: [
      { from: "Alex Johnson", content: "Can you send the files?" },
      { from: "Me", content: "I’ll send them right away." },
    ],
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <div className="flex h-screen w-[35%]">
        <LeftBar />
      </div>

      {/* Main Content */}
      <div className="flex bg-slate-200 h-screen w-screen">
        {/* Message List Section */}
        <div className="flex flex-col bg-gray-100 w-[30%] border-r border-gray-300">
          <h2 className="text-lg font-bold p-4 border-b bg-slate-100">Messages</h2>
          <div className="flex-1 overflow-y-auto">
            {chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat.id)}
                className={`flex items-center gap-4 p-4 hover:bg-gray-200 cursor-pointer ${
                  selectedChat === chat.id ? "bg-gray-300" : ""
                }`}
              >
                <img
                  src={chat.avatar}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full border border-gray-300"
                />
                <div>
                  <h3 className="font-bold">{chat.name}</h3>
                  <p className="text-sm text-gray-500">{chat.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Section */}
        <div className="flex flex-col w-full">
          {selectedChat ? (
            <div className="flex flex-col h-full">
              {/* Chat Header */}
              <div className="flex items-center gap-4 p-4 border-b bg-slate-100">
                <img
                  src={chats.find((chat) => chat.id === selectedChat).avatar}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <h2 className="font-bold text-lg">
                  {chats.find((chat) => chat.id === selectedChat).name}
                </h2>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
                {messages[selectedChat].map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.from === "Me" ? "justify-end" : "justify-start"
                    } mb-4`}
                  >
                    <div
                      className={`px-4 py-2 rounded-lg ${
                        message.from === "Me"
                          ? "bg-slate-500 text-white"
                          : "bg-gray-300 text-black"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex items-center p-4 border-t bg-slate-100">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                />
                <button className="ml-4 bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-slate-600">
                  Send
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center flex-1 text-gray-500">
              Select a chat to start messaging
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
