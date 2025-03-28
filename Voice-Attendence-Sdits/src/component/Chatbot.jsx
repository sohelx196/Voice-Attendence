import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react"; // Icon for chatbot toggle
import Input from "./Input";
import { LuSendHorizontal } from "react-icons/lu";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Predefined chatbot responses
  const responses = {
    "hi": "Hello! Whats going on!! How can I help you today?",
    "how to mark attendance": "Just say your name out loud, and the system will record it!",
    "check my attendance": "Please enter your student ID to fetch your attendance record.",
    "hello": "Hey there! How can I help you today?",
    "bye": "Goodbye! Have a great day!",
  };

  // Handle user input
  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    const botReply = responses[input.toLowerCase()] || "I'm not sure. Please ask another question.";

    setTimeout(() => {
      const botMessage = { text: botReply, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        className="fixed bottom-6 right-6 border border-black text-black p-3 rounded-full shadow-lg  transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chatbot Popup */}
      {isOpen && (
      <div className="mb-5 fixed bottom-16 right-6 w-80 bg-white shadow-lg rounded-lg p-4 border border-black">
      <h2 className="text-lg font-bold text-center mb-2">Need any help 🧐 ?</h2>
    
      {/* Chat Messages */}
      <div className="h-48 overflow-y-auto border p-2 mb-2 w-full">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 my-1 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
         
            <span className={`googleFont px-3 py-1 rounded-lg inline-block break-words max-w-[75%] ${
              msg.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-200 text-black self-start"
            }`}>
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
