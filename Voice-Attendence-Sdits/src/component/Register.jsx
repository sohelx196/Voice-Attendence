import React from 'react'
import Input from "./Input";
import { useState } from 'react';
import { MdKeyboardVoice } from 'react-icons/md'; // Assuming you're using react-icons
import Chatbot from './Chatbot';

function Register() {
  const [isRecording, setIsRecording] = useState(false);
  
  const handleVoiceClick = () => {
    setIsRecording(!isRecording);
    // Add voice recording logic here
    // ...
  };  



  return (
    <>
    <div className="justify-around relative h-screen w-full flex  items-center bg-gradient-to-br from-slate-300 to-slate-100 rounded-t-3xl">
      
      <div className="hidden md:block"> 
         <h1 className="sm:text-sm md:text-3xl lg:text-6xl font-normal text-center mb-6 text-slate-400 googleFont">Register</h1>
         <h1 className="sm:text-sm md:text-3xl lg:text-6xl font-normal text-center mb-6 text-slate-400 googleFont">New</h1>
         <h1 className="sm:text-sm md:text-3xl lg:text-6xl font-normal text-center mb-6 text-slate-400 googleFont">Student</h1>
      </div>

{/* Main Form Yaha se start hua hai */}
<form action="#">
      <div className="googleFont border border-black  bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md bg-opacity-60">

        <div className="space-y-4">
          <div className='flex space-x-4'>
          <Input type="text" placeholder="Student Full Name" className="border rounded-md p-2 w-full focus:ring focus:ring-blue-200" required/>
          <Input type="text" placeholder="Student Roll No" className="border rounded-md p-2 w-full focus:ring focus:ring-blue-200" required/>
          </div>
          <div className='flex space-x-4'>
          <Input id="myCourse" type="text" placeholder="Course" className="border rounded-md p-2 w-full focus:ring focus:ring-blue-200" required/>
          <Input type="text" placeholder="Branch" className="border rounded-md p-2 w-full focus:ring focus:ring-blue-200" required/>
          </div>

          <div>
          <Input type="email" placeholder="Student Email" className="border rounded-md p-2 w-full focus:ring focus:ring-blue-200" required/>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleVoiceClick}
              className={`p-4 rounded-full ${
                isRecording ? 'bg-red-500 text-white' : 'bg-blue-400 text-white'
              }  transition-colors duration-300`}
            >
              <MdKeyboardVoice className="text-2xl" />
            </button>
          </div>
          <p className="text-center text-sm text-gray-600 googleFont">
            {isRecording ? 'Say your name' : 'Click to Add Voice'}
          </p>
        </div>

        <div className="mt-6 text-center">
          <button type='submit' className="bg-gray-100 border-black googleFont hover:shadow-md hover:shadow-slate-400 hover:transition-all text-black  border focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 sm:min-w-fit md:w-1/3 lg:w-full ">
            Register
          </button>
      </div>              

</div>
</form>


  </div>
<div>
  <Chatbot />
</div>
</>
  );
}
export default Register;