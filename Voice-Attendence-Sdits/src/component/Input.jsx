import React from 'react'

function Input({type,name,id,placeholder}) {
  return (
    <>
      <div className=''> 
         <input type={type} name={name} id={id} placeholder={placeholder} 
          className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4' />
      </div>
    </>
  )
} 

export default Input

