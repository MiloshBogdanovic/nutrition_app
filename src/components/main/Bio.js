import React from 'react';
import Kat from '../../img/Katya.jpg';
import Container from 'react-bootstrap/Container'
import '../../css/Bio.css';
import Milos from '../../img/profileMilos.jpg';
import Image from 'react-bootstrap/Image';
import { Row,Col } from 'react-bootstrap';
function Bio () {
    return(
        <div className='bioWraper'> 
         <Container fluid > 
            <Row>
                <Col className='imgCol'xs={2} sm={2} md={2} lg={2} xl={2}>
                    <Image src={Kat} thumbnail />
                 </Col>
                <Col className='textCol' xs={8} sm={8} md={8} lg={8} xl={8}>
                    <h2 className='bioHeader'>Our team</h2>
                    <p className='pBio' > Katya Vella is a fully qualified nutrition and weight management advisor. 
                         She has a passion for fitness, enjoys cooking and spending time with people. 
                         Katya is wholeheartedly committed to her work in supporting others with achieving healthier lives through a balanced diet.
                         Her firm belief in the importance of having balanced, healthy behaviours around food are at the core of her practice.
                         She also has personal first hand experience of this and is greatly motivated to assist people through the various myths and pitfalls surrounding the matter.
                    </p>
                
                </Col>
                
            </Row>
            <Row>
                <Col className='imgCol'xs={2} sm={2} md={2} lg={2} xl={2}>
                    <Image src={Milos} thumbnail />
                 </Col>
                <Col className='textCol' xs={8} sm={8} md={8} lg={8} xl={8}>
                    
                    <p className='pBio' > 
                    Milos Ilic is a fully qualified fitness trainer as well as nutrition and weight management advisor. 
                    His passion for health and fitness runs in his work ethic and is markedly dedicated when it comes to assisting people to achieve their health and fitness goals. 
                    Milos’s awareness on the impact that proper nutrition has on our lives increased following an accident that left him fighting for his life. 
                    He started following a plant based diet and made a remarkably speedy recovery much to the amazement of his doctors. </p>
                
                </Col>
                
            </Row>
         </Container>
        </div>
    )
}

export default Bio;