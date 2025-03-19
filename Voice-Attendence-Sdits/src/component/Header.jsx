import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
 <div className="  flex p-5 item-center justify-center ">
  {/* <div className="">
     <h1 className="text-3xl font-semibold">Go Paperless</h1>
  </div> */}

   <nav className="border border-black  rounded-full">
      <ul className="flex">
        <li className="m-3 googleFont "><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
        <li className="m-3 googleFont"><NavLink to="attendence" className={({ isActive }) => (isActive ? "active" : "")}>Attendence</NavLink></li>
        <li className="m-3 googleFont"><NavLink to="register" className={({ isActive }) => (isActive ? "active" : "")}>Register</NavLink></li>
        <li className="m-3 googleFont"><NavLink to="adminLogin" className={({ isActive }) => (isActive ? "active" : "")}>Admin</NavLink></li>
      </ul>
   </nav>
    

 </div>
  );
}

export default Header
