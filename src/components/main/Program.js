import React from 'react';
import '../../css/program.css';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import MyModal from './Modal';
import Button from 'react-bootstrap/Button';


function Program (){
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <div className="program-div">
            
                <h2 id="headerProg">Programs offered</h2>
                <p id="pProgram">
                Our programs have two core areas <Badge variant="light">Nutrition Plans</Badge>  and ongoing support to help each individual achieve his/her health goals and guided <Badge variant="light">Physical Activity Classes</Badge>  with a professional trainer,

                tailored lifestyle programs for each individual . The two core areas are highly inter-related, ideally they go together but they can also be offered separately.
                Each individual will be able to track and monitor his/her own progress through an <a className='link' href="https://www.nutritics.com/p/libro"> <Badge  variant="light">Interactive App</Badge> </a> that will
                be made available throughout the duration of the 8-week course. <br/>  </p>
                <h3 id="headerGroup">Standard Group Package: <br/></h3>
                <label>Individuals will join a group of (maximum) 10 ppl for an 8-week weight managment program, comprising of:</label>
                <ListGroup >
                <ListGroup.Item variant="Success">Individually tailored nutrition plans, nutrition advice and support</ListGroup.Item>
                <ListGroup.Item variant="Success">Weekly in 1-hour group support sessions</ListGroup.Item>
                <ListGroup.Item variant="Success">2 classes in a workout studio / week with a professional trainer</ListGroup.Item>
                <ListGroup.Item variant="Success">Physical activity and lifestyle support tailored to the particular individual</ListGroup.Item>
                <ListGroup.Item variant="Success">Track your progress with our food and activity tracking app</ListGroup.Item>
                </ListGroup>
                <Button id="modalBtn" size="lg" variant="outline-light" onClick={() => setModalShow(true)}>
                 Click for contact and more info
                </Button>
                <MyModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
                <h3 id="headerSingl">One-to-one / Couple / Small Group / Family  <br/></h3>
                <label>This is an 8-week program, comprising of:</label>
                <ListGroup >
                <ListGroup.Item variant="Success">Learn the foundations of proper nutrition and build a tailored meal plan</ListGroup.Item>
                <ListGroup.Item variant="Success">Educational food shopping trip with the individual / couple or small group</ListGroup.Item>
                <ListGroup.Item variant="Success">Physical activity and lifestyle support tailored to the particular individual</ListGroup.Item>
                <ListGroup.Item variant="Success">Track your progress with our food and activity tracking app</ListGroup.Item>
                </ListGroup>
                <Button id="modalBtn" size="lg" variant="outline-light" onClick={() => setModalShow(true)}>
                 Click for contat and more info
                </Button>
                <MyModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
           
        </div>
    );
}

export default Program;