import React from "react";
import Input from "./Input";

function Home() {
  return (
    <>
      <div className="relative h-screen w-full flex justify-around items-center  rounded-t-3xl">
        <div className="flex justify-center items-center ">
          <img src="/src/assets/VoiceBoy.gif" alt="BoyImage" />
        </div>

        <div className="text-4xl font-bold">
          <h1 className="googleFont text-5xl">Welcome to</h1>
          <h1 className="googleFont text-3xl">Online Voice Attendence</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
