import React, { Component } from 'react';
import { Link } from 'react-router';
import './Header.css';

export default class Header extends Component {
	render() {
		return (
			<div className="Header">
				<ul className="Elements">
					<Link to="/"  className="Link"><li>Projects</li></Link>
					<Link to="/about" className="Link"><li>About me</li></Link>
					<Link to="/contact" className="Link"><li>Contact</li></Link>
				</ul>
			</div>
		);
	}
}