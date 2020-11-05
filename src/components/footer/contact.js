import React from 'react';
import { Col, Container,Row } from 'react-bootstrap';
import '../../css/contact.css';
import { AiFillFacebook } from 'react-icons/ai';
import { RiMailUnreadFill } from 'react-icons/ri';
import { AiOutlineInstagram } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Logo from '../../img/logo.png';
import libroLogo from '../../img/libroLogo.png';
function Contact () {
    return (
        <div className='contact-wraper' id='contact-div'>
           
            <center><h2 className="contact-header">Contact Us:</h2></center>
             <Container fluid>         
                <Row className="info-text">
                  <h6 className="span-contact"> Feel free to contact us for further information. </h6>
                </Row> 
                <Row >
                    <Col xs={1} sm={1} md={4} lg={4} xl={4}> 
                    <img className="logo-img" src={Logo} />
                    </Col>
                    <Col xs={10} sm={10} md={4} lg={4} xl={4} className="info-text">
                    <label>WhatsApp: <br/><a href="tel:0035677555020">Milos: +35677555020</a> <br/> <a href="tel:0035679957772">Katya: +35679957772</a> </label>   
                    <label>E-mail:<a href="mailto:nutribalancemalta@gmail.com"> nutribalancemalta@gmail.com</a></label>
                    </Col>
                    <Col xs={1} sm={1} md={4} lg={4} xl={4}>
                    <img className="logo-img-libro" src={libroLogo} />
                    </Col>
                    
                     </Row>
               
                <Row id='socialMobileView' xs={8} sm={8} md={4} lg={4} xl={4}>
                    <Col className="button-col" xs={10} sm={10} md={4} lg={1} xl={1}>
                     <Button  href="https://www.facebook.com/search/top/?q=nutribalance-malta" variant="outline-primary" size='lg' block><i><AiFillFacebook /></i>FACEBOOK</Button>
                     <Button  href="https://www.instagram.com/nutribalance.malta/?hl=en" variant="outline-secondary" size='lg' block><i><AiOutlineInstagram /></i>INSTAGRAM</Button>
                    </Col>
                    
                </Row>
            </Container>
        </div>   
      
    );
}

export default Contact;