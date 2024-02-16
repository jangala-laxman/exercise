import './App.css';
import React, {useState} from 'react'
import Home from './Components/Home/Home';
import ImageHandler from './Components/ImageHandler';

function App() {
  
  const [image, setImage] = useState(null)
  const [getStarted, setgetStarted] = useState(false)

  return (
    <div className="App">
      <header>
        <h2>Paint On Image</h2>
      </header>
      {
        getStarted ?  <ImageHandler image={image} setImage={setImage} setgetStarted={setgetStarted} /> : <Home setgetStarted={setgetStarted} />
      }
      

    </div> 
  );
}

export default App;