import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Header from './component/Header';


function App() {
  return (
    <div>
      <div className='' >
          <Header/>
      </div>
      <div className='container mx-auto'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;