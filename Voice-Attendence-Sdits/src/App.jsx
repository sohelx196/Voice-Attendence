
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './component/Header'

function App() {

  return (
   <div>
      <Header/>
      <div className='h-screen w-full flex justify-center items-center flex-col bg-gray-700'>
         <Outlet/>
      </div>
   </div>
    
  )
}

export default App
