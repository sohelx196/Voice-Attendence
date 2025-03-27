import React from "react";
import Input from "./Input";

function Home() {
  return (
    <>
      <div className="googleFont relative h-screen w-full flex flex-col md:flex-row justify-center items-center p-10 rounded-t-3xl">
  
  
  <div className="flex justify-center items-center">
    <img src="/src/assets/VoiceBoy.gif" alt="BoyImage" className="w-80 md:w-96 drop-shadow-lg" />
  </div>


  <div className="text-center md:text-left mt-8 md:mt-0 md:ml-10">
    <h1 className="googleFont text-6xl font-extrabold drop-shadow-md animate-fade-in">
      Welcome 
    </h1>
    <h1 className="googleFont text-4xl font-semibold mt-2 animate-slide-up">
      Online Voice Attendance
    </h1>

    <button className="mt-6 px-6 py-3 bg-white text-black text-lg  rounded-lg 
     hover:shadow-md hover:shadow-slate-400 hover:transition-all border focus:ring-1 focus:ring-blue-300 font-medium  sm:min-w-fit md:w-1/3 lg:w-1/3">
      Get Started 
    </button>
  </div>
</div>

    </>
  );
}

export default Home;
