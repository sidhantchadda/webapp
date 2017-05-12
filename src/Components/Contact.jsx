import React, {Component} from 'react';
import '../Css/Contact.css'
class Contact extends Component {
	render() {
		const Data = {
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
				<form name="contact" action="/contact" method="post">
					<div className="Content">
						<div className="text">
							FIRST NAME
						</div>
						<br/>
						<input type="text" name="fname" required/>
						<br/>
						<div className="text">
							LAST NAME
						</div>
						<br/>
						<input type="text" name="lname" required/>
						<br/>

						<div className="text">
							EMAIL
						</div>
						<br />
						<input type="text" name="email" autocomplete="off" required/>
						<br />
						<div className="text">
							MESSAGE
						</div>
						<br />

						<textarea name="message" required/>
						<br />

						<button type="submit" value="Submit">Send Message</button>
					</div>

				</form>
			</div>
		);
	}
}
export default Contact;