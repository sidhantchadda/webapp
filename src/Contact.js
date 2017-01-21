import React, {Component} from 'react';
import './Contact.css'
class Contact extends Component {
	render() {
		var Data = {
			"Name": "Sidhant Chadda",
			"Email": "sidhantchadda@gmail.com",
			"Phone": "(408)-799-6959",
			"TagLine": "Student / Developer"
		};
		return(
			<div className="Contact">
				<Card data={Data}/>
			</div>
		);
	}
}
class Card extends Component {
	render() {
		return(
			<div className="Card">
				{this.props.data.Email}
				<br />
				{this.props.data.Phone}
			</div>
		);
	}
}
export default Contact;