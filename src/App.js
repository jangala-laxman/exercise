import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route} from'react-router-dom'
// import Canvas from './Components/Canvas/Canvas';
import Home from './Components/Home/Home';
import ImageHandler from './Components/ImageHandler';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Paint On Image</h2>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/upload' element={<ImageHandler />} />
          {/* <Route path='/paint' element={<Canvas />} /> */}
        </Routes>
      </BrowserRouter>

    </div> 
  );
}

export default App;
