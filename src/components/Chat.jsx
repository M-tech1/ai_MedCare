import { React, useState } from "react";
import "./chatStyles.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const newMessages = [...messages, { text: inputMessage, sender: "user" }];
    setMessages(newMessages);
    setInputMessage("");

    // Simulate the chatbot's response (you would replace this with your actual logic)
    setTimeout(() => {
      const botResponse = {
        text: "Hello! How can I assist you today?",
        sender: "bot",
      };
      setMessages([...newMessages, botResponse]);
    }, 500);
  };

  return (
    <div className="chatbot-container" id="chat">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
