import React from 'react';
import './App.css';
import NaviBar from './components/header/NaviBar';
import BackGroundVideo from './components/header/BackGroundVideo'
import Slider from './components/main/Slider';
import Bio from './components/main/Bio'
import Logo from './img/logo.png' 
import Info from './components/main/Info';
import Comments from './components/main/Comments'
import FBcomments from './components/main/FBcomments';

import Program from './components/main/Program'
function App() {
  return (
    <div className="App">
      <div className="app-header">
      <img className="logo-img" src={Logo} />
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
      
    </div>
  );
}

export default App;
