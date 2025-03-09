
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './component/Header'

function App() {

  return (
<div>
   <Header/>
      <div className='bg-gray-50 h-screen w-full flex justify-center items-center flex-col  rounded-3xl'>
         <Outlet/>
      </div>
</div>
   
    
  )
}

export default App
