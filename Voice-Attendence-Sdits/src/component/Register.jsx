import React from 'react'
import Input from "./Input";
import { useState } from 'react';
import { MdKeyboardVoice } from 'react-icons/md'; // Assuming you're using react-icons

function Register() {
  const [isRecording, setIsRecording] = useState(false);
  
  const handleVoiceClick = () => {
    setIsRecording(!isRecording);
    // Add voice recording logic here
    // ...
  };  



  return (
    <div className="relative h-screen w-full flex justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300">
      {/* Background (using gradient and subtle shapes) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.8),transparent_80%),radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.6),transparent_80%)]"></div>

      {/* Registration Form (with improved styling) */}
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-6 text-blue-600">
          Register New Student
        </h1>
        <div className="space-y-4">
          <Input type="text" placeholder="Student Full Name" className="border rounded-md p-2 w-full focus:ring focus:ring-blue-200" />
          <Input type="text" placeholder="Student Roll No" className="border rounded-md p-2 w-full focus:ring focus:ring-blue-200" />
          <Input type="email" placeholder="Student Email" className="border rounded-md p-2 w-full focus:ring focus:ring-blue-200" />

          <div className="flex justify-center">
            <button
              onClick={handleVoiceClick}
              className={`p-4 rounded-full ${
                isRecording ? 'bg-red-500 text-white' : 'bg-blue-400 text-white'
              } hover:bg-blue-600 transition-colors duration-300`}
            >
              <MdKeyboardVoice className="text-4xl" />
            </button>
          </div>
          <p className="text-center text-sm text-gray-600">
            {isRecording ? 'Recording...' : 'Click to Record Voice'}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Register;