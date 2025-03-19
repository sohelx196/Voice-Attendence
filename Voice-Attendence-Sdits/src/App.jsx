import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Header from './component/Header';


function App() {
  return (
    <div>
  <Header/>
      <div className='container mx-auto'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;