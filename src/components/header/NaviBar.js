import React from 'react';

import '../../css/NaviBar.css';
import FB from '../../img/fb-icons.png' 
import IN from '../../img/whatsapp-icon.png' 
import WU from '../../img/instagram-icon.png' 


function NaviBar () {
    
    return(
        <div className='header-wraper'>
            
            <nav className="nav-top">
                
                <div className="socal-contact">
                    <ul>
                        <li><a href="https://www.facebook.com/search/top/?q=nutribalance-malta" target="_blank" rel="noopener noreferrer"><img  alt='logo FaceBook'  className="icon" src={FB} /></a></li>
                        <li><a href="https://www.instagram.com/nutribalance.malta/?hl=en" target="_blank" rel="noopener noreferrer"><img  alt='logo Instagram' className="icon" src={WU} /></a></li>
                        <li><a href="#contact-div" onClick={()=>{window.scrollTo(0, document.body.scrollHeight)}} ><img  alt='logo Contact'  className="icon" src={IN} /></a></li>
                        
                    </ul>
                </div>
        </nav>  
        </div>
       
    )
}

export default NaviBar;