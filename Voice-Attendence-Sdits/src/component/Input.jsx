import React from 'react'

function Input({type,name,id,placeholder}) {
  return (
    <>
      <div className=''> 
         <input type={type} name={name} id={id} placeholder={placeholder} 
          className='border rounded-md p-1 bg-transparent ' />
      </div>
    </>
  )
} 

export default Input
