import React, {Component} from 'react';
import '../Css/Tutor.css';
import location from '../Imgs/icon_pin_alt.png'
export default class Tutor extends Component {
	render() {
		return(
			<div className="Tutor">
				<div className="TutorCard">
					<Header />
				</div>
			</div>
		);
	}
}

class Header extends Component {
	render() {
		return(
			<div className="TutorHeading">
				<div className="TutorTitle">
					<b>Sidhant C.</b>
				</div>
				<div className="TutorDescription">
					Computer Science Student at Purdue University
				</div>
				<div className="TutorHeadingContainer">
					<img className="TutorImg" src={location} />
					<div className="TutorLocation">
						San Jose, CA 95138
					</div>
				</div>
			</div>
		);
	}
}