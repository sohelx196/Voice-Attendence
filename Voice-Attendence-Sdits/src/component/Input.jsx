import React from 'react'

function Input({type,name,id,placeholder}) {
  return (
    <>
      <div className=''> 
         <input type={type} name={name} id={id} placeholder={placeholder} 
          className='text-black h-[34px] text-[14px] text-white/60 w-[240px] bg-white  px-3 py-1 rounded-lg border border-black focus:outline-none focus:ring-0 focus:ring-blue-900 focus:ring-offset-1 focus:ring-offset-[#717198] transition-all duration-500 ease-in-out ' />
      </div>
    </>
  )
} 

export default Input
