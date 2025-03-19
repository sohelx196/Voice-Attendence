import React from 'react'
import Input from "./Input";
function Register() {
  return (
    <>
    <div className="relative h-screen w-full flex justify-center items-center ">
  {/* Background */}
  <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
  </div>
  
  {/* Registration Form */}
  <div className="border border-black rounded-lg p-5 bg-white shadow-lg">
    <h1 className="googleFont text-2xl">Register New Student</h1>
    <div className="mt-3">
      <Input type="text" placeholder="Student Full Name" />
      <Input type="text" placeholder="Student Roll No" />
      <Input type="text" placeholder="Student Email" />
      
    </div>
  </div>
</div>

    </>
  )
}

export default Register

