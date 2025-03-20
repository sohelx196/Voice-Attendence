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
    <div className="relative h-screen w-full flex justify-center items-center bg-gradient-to-br from-slate-300 to-slate-100 rounded-t-3xl">
      
 
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-6 text-blue-600 googleFont">
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
          <p className="text-center text-sm text-gray-600 googleFont">
            {isRecording ? 'Recording...' : 'Click to Add Voice'}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Register;