import React, {Component} from 'react';
import Picture from '../Imgs/me.jpg'
import '../Css/About.css'
class About extends Component {
	render() {
		return(
			<div className="About">
				<img src={Picture} className="Image" alt="pic of me" />
				<br />
				<div className="Text">
					Hello, my name is Sidhant and I am a student at Purdue University. I love to build things and learn about the people around me.
				</div>
			</div>
		);
	}
}

export default About;