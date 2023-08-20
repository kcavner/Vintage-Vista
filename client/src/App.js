import React from 'react';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Landing from './components/Landing'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <nav>
          <Link to={'/'}>Home</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
