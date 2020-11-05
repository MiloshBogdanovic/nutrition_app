import React from 'react';
import './App.css';
import NaviBar from './components/header/NaviBar';
import BackGroundVideo from './components/header/BackGroundVideo'
import Slider from './components/main/Slider';
import Bio from './components/main/Bio'
import Info from './components/main/Info';
import Comments from './components/main/Comments'
import Contact from './components/footer/contact';
import Program from './components/main/Program';

function App() {
  return (
    <div className="App">
      <div className="app-header">
    
      <NaviBar/>
      <BackGroundVideo/>
        <h1 id="mainHeader">STOP DIETING and START LIVING</h1>
      </div>
      <div className="app-main">
      <Info />
      <Program />
     <Bio />
     <Comments />
      </div>
        <div className='app-footer'>
        <Contact />
        </div>
    </div>
  );
}

export default App;
