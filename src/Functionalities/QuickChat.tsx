// import { useState } from "react";
import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyAKcQ-z8x02xVTGTLFj4YvggaEW1-DsyEU");

const QuickChat = () => {
  // const [responseText, setResponseText] = useState<string>("");

  const [prompt, setPrompt] = useState<string>("");
  const [chat, setChat] = useState<Message[]>([
    {
      role: "system",
      content:
        "Get started with ai-MedCare. Lets have a quick one: just explain how you feel.",
    },
  ]);

  const addMessage = (
    role: "system" | "user" | "assistant",
    content: string
  ) => {
    setChat((prevChat) => [...prevChat, { role, content }]);
  };

  interface Message {
    role: "system" | "user" | "assistant";
    content: string;
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      generateResponse();
    }
  };

  const generateResponse = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();
      addMessage("user", prompt);
      addMessage("assistant", text);
      setPrompt("");
    } catch (error) {
      console.error("Error generating response:", error);
      addMessage("system", "Error generating response. Please try again.");
    }
  };

  return (
    <>
      <div className="flex flex-col  h-full w-full ">
        {/* <!-- Header --> */}
        <div className="bg-gray-800 text-white py-4 sm:px-6 flex items-center text-center justify-between">
          <h1 className="text-l font-bold">Welcome to AI-MedCare Assist</h1>
        </div>

        <div className="flex-1 overflow-y-auto sm:p-4">
          <div className="flex-1 overflow-y-auto p-4" id="chat">
            {chat.map((message, index) => (
              <div
                key={index}
                className={`flex mb-4 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`${
                    message.role === "user"
                      ? "bg-secondary text-white"
                      : message.role === "assistant"
                      ? "bg-gray-500 text-white"
                      : "bg-gray-700 text-white"
                  } mt-3 flex text-left rounded-lg rounded-tr-none py-2 px-4 max-w-sm`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <!-- Message Input --> */}
        <div className="bg-gray-200 p-4 relative ">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-2 border border-gray-400 rounded-full focus:outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              className="ml-4 bg-primary text-white rounded-full px-4 py-2 hover:bg-secondary focus:outline-none"
              onClick={generateResponse}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickChat;
