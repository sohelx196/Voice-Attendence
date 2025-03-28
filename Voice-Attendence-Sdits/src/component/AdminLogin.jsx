import React from 'react'
import Chatbot from './Chatbot'


function AdminLogin() {
  return (
    <div className="relative h-screen w-full flex justify-center items-center bg-gradient-to-br from-slate-300 to-slate-100 rounded-t-3xl">
      <div class="flex justify-center">

  <div class="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
    <h2 class="text-2xl font-bold pb-5">Sign In</h2>
    <form>
      <div class="mb-4">
        <label for="email" class="block mb-2 text-sm font-medium">Email</label>
        <input
          type="email"
          id="email"
          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
          placeholder="sdits@gmail.com"
          required
         
        />
      </div>

      <div class="mb-4">
        <label for="password" class="block mb-2 text-sm font-medium">Password</label>
        <input
          type="password"
          id="password"
          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
          placeholder="*********"
          required
         
        />
      </div>

{/* Ye last wala div hai */}
      <div class="flex items-center justify-between mb-4">
        <button
          type="submit"
          class="googleFont hover:shadow-md hover:shadow-slate-400 hover:transition-all text-white  border focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 sm:min-w-fit md:w-1/3 lg:w-1/3"
        >
          Login
        </button>
        <div class="flex items-center text-sm">
          <p>New here?</p>
          <p class="hover:underline cursor-pointer ml-1 text-blue-200">SignUp</p>
        </div>
      </div>


    </form>
  </div>
</div>
<div>
  <Chatbot />
</div>
</div>

  )
}

export default AdminLogin