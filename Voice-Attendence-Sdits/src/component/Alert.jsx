import { useState } from "react";

export default function Alert() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="googleFont fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2 className="text-xl font-bold">Student Added!</h2>
        <p className="mt-2">Student can now mark their attendence.</p>
        <button 
          onClick={() => setShow(false)} 
          className="mt-4 px-4 py-2  text-white rounded bg-slate-400
           hover:shadow-md hover:shadow-slate-400 hover:transition-all   border focus:ring-1 focus:ring-blue-300 font-medium  text-sm  sm:min-w-fit md:w-1/3 lg:w-1/3"
        > 
          Close
        </button>
      </div>
    </div>
  );
}