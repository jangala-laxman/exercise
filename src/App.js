import './App.css';
import React, {useState} from 'react'
import {BrowserRouter, Routes, Route} from'react-router-dom'
// import Canvas from './Components/Canvas/Canvas';
import Home from './Components/Home/Home';
import ImageHandler from './Components/ImageHandler';
// import Canvas from './Components/Canvas/Canvas';

function App() {
  
  const [image, setImage] = useState(null)
  return (
    <div className="App">
      <header>
        <h2>Paint On Image</h2>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/upload' element={<ImageHandler image={image} setImage={setImage} />} />
          {/* <Route path='/paint' element={<Canvas image={image} setImage={setImage} />} /> */}
        </Routes>
      </BrowserRouter>

    </div> 
  );
}

export default App;
