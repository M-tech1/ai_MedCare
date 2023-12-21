import React from "react";
import "./Styles.css";
// import Chats from "../components/QuickChat";
import Chats from "../components/Chat";
import aiabout from "../assets/aibot.png";
import "./mobile_styles.css";
import { UserContext, useUserContext } from "../contexts/user";

const QuickChats = () => {
  const { user } = useUserContext();

  return (
    <div className="chatscontainer">
      <div className="app-container" id="chats">
        {/* Left Section with Image */}
        <div className="image-container">
          <img src={aiabout} />
        </div>

        {/* Right Section with Chat */}
        <div className="chat-container">
          <h2 className="chat_container_text1">
            <strong style={{ textTransform: "capitalize" }}>
              {user?.displayName}
            </strong>
            {", "}
            how can i help you today?
          </h2>
          <p className="chat_container_text2">
            report your Medical issues lets us see how we can help...
          </p>
          <div className="chat-messages">
            <Chats />
          </div>
          {/* add a chat input field, send button, etc. as needed */}
        </div>
      </div>
    </div>
  );
};

export default QuickChats;
