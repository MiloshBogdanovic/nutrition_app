import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css';
import '../../css/Forma.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';

export default class Forma extends React.Component {
  constructor(props) {
	super(props);
	this.state = { name: '', email: '', number: '', message: ''};
	this.resetForm=this.resetForm.bind(this);
	
  }
  


  render() {
	return (
		<div className="formaDiv">
			
		<Form onSubmit={this.handleSubmit.bind(this)} method="POST">	
		<Form.Group >
		<Form.Row>
		  <Form.Label column lg={2}>
			Name and Surname :
		  </Form.Label>
		  <Col>
			<Form.Control type="text" placeholder="Enter you'r name and surname.." as="input" required value={this.state.name} onChange={this.onNameChange.bind(this)} />
			<Form.Text className="text-muted">
     		 We'll never share your name with anyone else.
    		</Form.Text>
		  </Col>
		</Form.Row>
		<br />
		<Form.Row>
		  <Form.Label column lg={2}>
			Email adress :
		  </Form.Label>
		  <Col>
			<Form.Control required value={this.state.email} type="email" placeholder="Enter you'r e-mail adresse.." as='input'  onChange={this.onEmailChange.bind(this)} />
			<Form.Text className="text-muted">
     			 We'll never share your email with anyone else.
    		</Form.Text>
		  </Col>
		</Form.Row>
		<br />
		<Form.Row>
		  <Form.Label column lg={2}>
			Mobile number :
		  </Form.Label>
		  <Col> 
		  < PhoneInput id="phoneInput" placeholder="Enter phone number"   value={this.state.number}
			onChange={number=>{this.setState({number})}}
		 />
		  </Col>
		
		</Form.Row>
		<Form.Row>	

		</Form.Row>
		<Col> 
		<Form.Label>Message :</Form.Label>
    	<Form.Control placeholder="Enter addition questions and informations.."  as="textarea" rows="4" type="text" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
		</Col>
	  	</Form.Group>
	
	  <Button type="submit"  variant="primary" size="lg" >
       		 Submit
     </Button>
	</Form>
	 </div>
	)
  }
  toggle = () => {
	this.setState(prevState => ({disabled: !prevState.disabled }))
  };

 
  onNumberChange(event) {
	this.setState({number: event.target.value})
  }
  onEmailChange(event) {
	this.setState({email: event.target.value})
  }
  onNameChange(event) {
	this.setState({name: event.target.value})
  }
  onMessageChange(event) {
	this.setState({message: event.target.value})
  }

  resetForm(){
    
	this.setState({name: '', email: '', number: '', message:''})
 }

  handleSubmit (event) {
	event.preventDefault();
	const template = {
		from: this.state.name,
		email: this.state.email,
		age: this.state.age,
		activity: this.state.valueActivity, 
		goal: this.state.selectGoal,
		bodyWeight: this.state.bodyWeight,
		diet: this.state.valueDiet,
		gender: this.state.gender,

	  };
	  emailjs
	  .send('contact_service', 'nutrition_form', template, 'user_Sl8ogEvceS5grzBjkpp70')
	  .then((result) => {
		console.log(result.text);
		alert('Thank you for contating us, NutriBalanc team will come back as soon we review you appication.')
		this.resetForm();
	}, (error) => {
		console.log(error.text);
	});
	
  }

 
}