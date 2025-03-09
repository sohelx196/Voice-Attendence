import React from "react";
import NavLink from "react-router-dom";


function Header() {
  return (
 <div className="border flex p-4">
  <div className="bg-slate-600">
     <h1>Go Paperless</h1>
  </div>

    <div className="bg-blue-300">
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
