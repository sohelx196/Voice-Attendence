import React, { useRef } from "react";
import Chatbot from "./Chatbot";
import { Mic, MicOff } from "lucide-react"; // Mic icons
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useState } from "react";

function Home(){
  const attendanceRef = useRef(null);

  const handleMarkAttendance = () => {
    attendanceRef.current?.scrollIntoView({ behavior: "smooth" });
  };


//  Speech Recognition Setup

  const [isListening, setIsListening] = useState(false);
  const { transcript, resetTranscript, listening } = useSpeechRecognition();

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
    setIsListening(true);
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setIsListening(false);
    handleAttendance();
  };

  const handleAttendance = () => {
    if (transcript.trim() === "") return alert("No name detected! Try again.");
    alert(`Attendance marked for: ${transcript}`); // Replace with API call to store attendance
    resetTranscript();
  };


  

  return (
    <>
      <div className="googleFont relative h-screen w-full flex flex-col md:flex-row justify-center items-center p-10 rounded-t-3xl">
        <div className="flex justify-center items-center">
          <img src="/VoiceBoy.gif" alt="BoyImage" className="w-80 md:w-96 drop-shadow-lg" />
        </div>

        <div className="text-center md:text-left mt-8 md:mt-0 md:ml-10">
          <h1 className="googleFont text-6xl font-extrabold">Welcome! Buddy</h1>
          <h1 className="googleFont text-2xl font-semibold mt-5">What's going on!</h1>

          <button
            className="font-bold border-black mt-10 px-6 py-3 bg-white text-black text-lg rounded-lg 
            hover:shadow-md hover:shadow-slate-400 hover:transition-all border focus:ring-1 focus:ring-blue-300 sm:min-w-fit md:w-1/3 lg:w-1/3"
            onClick={handleMarkAttendance}>
            Mark Attendance 
          </button>
        </div>
      </div>
    
      <div className=" googleFont text-center text-4xl justify-center items-center bg-gradient-to-br from-slate-300 to-slate-100 rounded-t-3xl  h-96 mb-6">
        <button className="font-bold border-black mt-10 px-6 py-3 bg-white text-black text-lg rounded-lg 
            hover:shadow-md hover:shadow-slate-400 hover:transition-all border focus:ring-1 focus:ring-blue-300 ">
          View Attendance
        </button>
      </div>

    
      <div
        ref={attendanceRef} 
        className="googleFont text-center text-4xl justify-center
         flex flex-col items-center bg-gradient-to-br from-slate-300
          to-slate-100 rounded-3xl h-screen mb-6 ">  
                  
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Mark Attendace Here</h2>

 <button
  onClick={isListening ? stopListening : startListening}
  className=" border border-black hover:bg-zinc-200 hover:transition-all hover:duration-300 bg-white p-2 rounded-full shadow-lg transition">


  {isListening ? (
    <div className="w-10 h-10 flex justify-center items-center">
      <img src="/speakingVoice.gif" className="w-10 h-10 "/>
    </div>
  ):(<img src="/toSpeak.gif" alt="MicIcon"
     className="w-10 h-10 "/>)
  }
</button>

      <p className="mt-3 text-xs">{listening ? "Listening..." : transcript || "Click mic to mark attendance"}</p>
    </div>

      </div>

      <div> 
        <Chatbot />
      </div>
    </>
  );

}
export default Home;
