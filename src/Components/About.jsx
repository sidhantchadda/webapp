import React, {Component} from 'react';
import Picture from '../Imgs/me.jpg';
import Karate from '../Imgs/karate.jpg';
import Belt from '../Imgs/blackbelt.jpg';
import '../Css/About.css';

class About extends Component {
	render() {
		return(
			<div className="About">
				<img src={Picture} className="Image" alt="pic of me" />
				<br />
				<div className="Atext">
					Hello, my name is Sidhant and I am a student at Purdue University. I like to build things and learn about the people around me.
				</div>

				{/*
					<img src={Karate} className="Image" alt="me getting my blackbelt" />
					<img src={Belt} className="Image" alt="My belt" />

				<div className= "Atext">
					I am a practicioner of martial arts and am a black belt in Unryu Chinese Kenpo Karate.
				</div>

				<div className="Atext">
					<marquee> I'm cool I swear! </marquee>
				</div>*/}
			</div>
		);
	}
}

export default About;