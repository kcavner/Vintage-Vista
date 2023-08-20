import React from 'react';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Landing from './components/Landing'


function App() {
  return (
    <div className="App bg-vintage-white h-screen">
      <BrowserRouter>
      <header className='bg-vintage-tan'>
        <nav>
          <Link to={'/'} className="text-vintage-blue font-custom">Home</Link>
        </nav>
      </header>
      <Routes >
        <Route path='/' element={<Landing className='bg-vintage-blue h-screen'/>}/>
      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
