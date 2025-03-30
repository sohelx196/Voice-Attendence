import React from "react";
import Chatbot from "./Chatbot"; // Import chatbot

function Home() {
  return (
    <>
      <div className="googleFont relative h-screen w-full flex flex-col md:flex-row justify-center items-center p-10 rounded-t-3xl">
  
        <div className="flex justify-center items-center">
          <img src="/VoiceBoy.gif" alt="BoyImage" className="w-80 md:w-96 drop-shadow-lg" />
        </div>

        <div className="text-center md:text-left mt-8 md:mt-0 md:ml-10">
          <h1 className="googleFont text-6xl font-extrabold drop-shadow-md animate-fade-in">Welcome! Buddy</h1>
          <h1 className=" googleFont text-2xl font-semibold mt-3 animate-slide-up">What's going on!</h1>

          <button className="font-bold border-black mt-10 px-6 py-3 bg-white text-black text-lg  rounded-lg 
          hover:shadow-md hover:shadow-slate-400 hover:transition-all border focus:ring-1 focus:ring-blue-300 sm:min-w-fit md:w-1/3 lg:w-1/3">
           Mark Attendance
          </button>
        </div>
      </div>

      <div className="googleFont text-center text-4xl justify-center items-center bg-gradient-to-br from-slate-300 to-slate-100 rounded-3xl h-96 mb-6">
        <h1>Mark Attendance Here</h1>
      </div>

    <div>
      <Chatbot />
    </div>
    </>
  );
}

export default Home;
