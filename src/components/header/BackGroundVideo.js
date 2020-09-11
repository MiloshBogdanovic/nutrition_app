import React from 'react';
import '../../css/BackGroundVideo.css'
import videoSource from "../../img/coverr-sauce.mp4"

const BackgroundVideo = () => {
    
    return (
        
            <video autoPlay="autoplay" loop="loop" muted className='video' >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

           
        
    )
}

export default BackgroundVideo