import React from "react";
import Input from "./Input";

function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="border border-black rounded-lg p-5 ">
          <h1 className="googleFont text-2xl ">Mark Attendence</h1>

          <div className="mt-3">
            <Input type="text" placeholder="Enter Your Name" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
