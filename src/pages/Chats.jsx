import React from "react";
import "./Styles.css";
import Chat from "../components/Chat";
import aichatdoctor from "../assets/aichatdoctor.jpeg";

const Chats = () => {
  return (
    <div className="chatscontainer">
      <div className="app-container" id="chats">
        {/* Left Section with Image */}
        <div className="image-container">
          <img
            src={aichatdoctor}
            alt="Image"
            style={{ maxWidth: "120%", maxHeight: "120%" }}
          />
        </div>

        {/* Right Section with Chat */}
        <div className="chat-container">
          <h2 className="chat_container_text1">Welcome to the Chat</h2>
          <p className="chat_container_text2">how are feeling today?</p>
          <div className="chat-messages">
            <Chat />

            {/* Chat messages will be displayed here */}
          </div>
          {/* You can add a chat input field, send button, etc. as needed */}
        </div>
      </div>
    </div>
  );
};

export default Chats;
