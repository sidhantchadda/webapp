import React, { Component } from 'react';
import { Link } from 'react-router';
import '../Css/Header.css';

export default class Header extends Component {
	render() {
		function redirect() {
			window.open('https://drive.google.com/open?id=0B-UisOUEqEnsb05YQ3JsQTBDeG8');
		}
		const baseUrl = process.env.PUBLIC_URL;
		return (
			<div className="Header">
				<ul className="Elements">
					<Link to={baseUrl+"/"}  className="Link"><li>Projects</li></Link>
					<Link to={baseUrl+"/about"} className="Link"><li>About me</li></Link>
					<Link to={baseUrl+"/"} className="Link"><li onClick={redirect}>Resume</li></Link>
				</ul>
			</div>
		);
	}
}