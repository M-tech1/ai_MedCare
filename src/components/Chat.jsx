import { React, useState, useEffect } from "react";
import "./chatStyles.css";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAKcQ-z8x02xVTGTLFj4YvggaEW1-DsyEU");

const Chat = () => {
  const [prompt, setPrompt] = useState("");
  const [responseText, setResponseText] = useState("");

  const [chat, setChat] = useState([
    {
      role: "system",
      content:
        "Get started with ai-MedCare. just type how you feel end press enter.",
    },
  ]);
  const addMessage = (role, content) => {
    setChat((prevChat) => [...prevChat, { role, content }]);
  };

  // const responding = "here is what i embedded " + prompt + " u see ba";

  const generateResponse = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    // const model = genAI.getGenerativeModel({ model: "ai-MedCare" });

    // const result = await model.sendMessageStream(prompt);
    // console.log(result);
    try {
      const result = await model.generateContent(prompt);
      // const result = await model.sendMessageStream(prompt);
      const response = await result.response;
      const text = await response.text();
      addMessage("user", prompt);
      addMessage("assistant", text);
      setPrompt("");
    } catch (error) {
      console.error("Error generating respond:", error);
      addMessage("system", "Error generating responds. Please try again.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      generateResponse();
    }
  };

  console.log();

  return (
    <div className="chatbot-container" id="chat">
      <div className="chatbot-messages">
        {chat.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            {message.content}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={generateResponse}>Send</button>
      </div>
      <div>{responseText}</div>
    </div>
  );
};

export default Chat;
