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
		function sendData(data) {
			var getUrl = window.location;
			var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
			postData(baseUrl+'/contact', data)
				.then(res => {
					console.log(res);
				})
				.catch(error => {
					console.log(error);
				});
		}
		function postData(url, data) {
		  // Default options are marked with *
		  return fetch(url, {
		    body: JSON.stringify(data), // must match 'Content-Type' header
		    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		    credentials: 'same-origin', // include, same-origin, *omit
		    headers: {
		      'user-agent': 'Mozilla/4.0 MDN Example',
		      'content-type': 'application/json'
		    },
		    method: 'POST', // *GET, POST, PUT, DELETE, etc.
		    mode: 'cors', // no-cors, cors, *same-origin
		    redirect: 'follow', // manual, *follow, error
		    referrer: 'no-referrer', // *client, no-referrer
		  })
		  .then(response => response.json()) // parses response to JSON
		}
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