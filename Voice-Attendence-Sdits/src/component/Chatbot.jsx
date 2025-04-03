import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { TbMessageChatbot } from "react-icons/tb";
import Input from "./Input";
import { LuSendHorizontal } from "react-icons/lu";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Static responses
  const responses = {
    "hi": "Hello! What's going on!! How can I help you today?",
    "how to mark attendance": "Just say your name out loud, and the system will record it!",
    "check my attendance": "Please enter your student ID to fetch your attendance record.",
    "hello": "Hey there! How can I help you today?",                                                                  
    "bye": "Goodbye! Have a great day!",
    "whats your name": "I dont have any specific name, but you can call me Optimus Prime!",
    "hi optimus prime": "Hello buddy! How can I assist you today?",
    "hello optimus prime": "Hello buddy! How can I assist you today?",
    "how are you": "I'm fine 😊 & What about you ?",
    "what can you do": "I can help you with attendance-related queries and much more!",
    "thank you": "You're welcome! If you have any more questions, feel free to ask.",
    "what is attendance": "Attendance is the act of being present at a place, such as a class or meeting.",
    "how to register": "To register, please fill out the registration form with your details.",
    "how to use this app": "This app allows you to mark your attendance and check your records easily.",
    "what is the purpose of this app": "The purpose of this app is to simplify the attendance marking process.",
  };

  // Handle user input
  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    const botReply =
      responses[input.toLowerCase()] || "I'm not sure. Please ask another question.";

    setTimeout(() => {
      const botMessage = { text: botReply, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);

    setInput(""); // Reset input field
    // setTimeout(() => {
    //   setInput(""); // Clear input field after a delay
    // },2000);
  };

  return (
    <>
      {/* Chatbot Toggle Button with message preview */}
      <button
        className="bg-slate-300 fixed bottom-4 right-3 border border-black text-black p-3 rounded-full shadow-lg transition-all flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FaTimes size={22} />
        ) : (
          <>
            <TbMessageChatbot  size={24} className="" />
            {/* <span className="text-sm font-semibold">Help?</span> */}
          </>
        )}
      </button>

      {/* Chatbot Popup */}
      {isOpen && (
        <div className="mb-5 fixed bottom-16 right-6 w-80 bg-white shadow-lg rounded-lg p-4 border border-black">
          <h2 className="text-lg font-bold text-center mb-2">Need any help 🧐 ?</h2>

          {/* Chat Messages */}
          <div className="h-56 overflow-y-auto  p-2 mb-2 w-full ">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-1 ${msg.sender === "user" ? "text-right" : "text-left"}`}
              >
                <span
                  className={`googleFont px-3 py-1 rounded-lg inline-block break-words max-w-[75%] ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white self-end"
                      : "bg-gray-200 text-black self-start"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="flex">
            <Input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border flex-1 px-2 py-1 rounded-l-md googleFont"
              placeholder="Just Ask me! ☺️"
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()} // Allows Enter key to send
            />
            <button
              onClick={handleSendMessage}
              className="rounded-md hover:shadow-md hover:shadow-slate-400 hover:transition-all text-black border px-4 py-1 rounded-r-md"
            >
              <LuSendHorizontal size={22} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
