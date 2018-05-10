import React, { Component } from 'react';
import { Link } from 'react-router';
import '../Css/Header.css';

export default class Header extends Component {
	render() {
		function redirect() {
			window.open('https://drive.google.com/open?id=0B-UisOUEqEnsb05YQ3JsQTBDeG8');
		}
		return (
			<div className="Header">
				<ul className="Elements">
					<Link to="/"  className="Link"><li>Projects</li></Link>
					<Link to="/about" className="Link"><li>About me</li></Link>
					<Link to="/" className="Link"><li onClick={redirect}>Resume</li></Link>
				</ul>
			</div>
		);
	}
}