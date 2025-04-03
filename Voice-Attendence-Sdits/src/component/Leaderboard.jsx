import React from 'react'
import Chatbot from './Chatbot'

function Leaderboard() {
  return (
    <>
    <div className="relative h-screen w-full flex justify-center items-center bg-gradient-to-br from-slate-300 to-slate-100 rounded-t-3xl">
        <h1 className='text-4xl font-bold'>LeaderBoard !</h1>
    </div>
    <div>
      <Chatbot />
    </div>
    </>
  )
}

export default Leaderboard