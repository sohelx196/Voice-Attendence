import React from "react";
import { NavLink } from "react-router-dom";



function Header() {
  return (
 <div className="border flex p-3 ">
  <div className="">
     <h1 className="text-3xl font-semibold">Go Paperless</h1>
  </div>

    <div className=" ">
      <ul className="flex">
        {/* <li className=""><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li> */}
        <li className=""><NavLink to="attendence" className={({ isActive }) => (isActive ? "active" : "")}>Attendence</NavLink></li>
        {/* <li className=""><NavLink to="" className={({ isActive }) => (isActive ? "active" : "")}>New Student</NavLink></li> */}
        <li className=""><NavLink to="register" className={({ isActive }) => (isActive ? "active" : "")}>Register</NavLink></li>
        <li className=""><NavLink to="adminLogin" className={({ isActive }) => (isActive ? "active" : "")}>Admin</NavLink></li>
      </ul>
    </div>

 </div>
  );
}

export default Header
