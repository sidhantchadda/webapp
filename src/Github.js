import React, { Component } from 'react';
import './Github.css';
import logo from './logo0.svg'
import logo1 from './logo1.svg'

class Logo extends Component {
	render() {
		let img = null;
		if(this.props.url === 0)
			img = <img src={logo} className="Git-logo" alt="logo"/>
		else
			img = <img src={logo1} className="Git-logo" alt="logo"/>
		return (
				<a href="http://www.github.com/koochi10">
					{img}
				</a>
		);
	}
}

class Wrapper extends Component {
	//handle hover events here
	constructor() {
		super();
		this.state = {
			url: 0
		};
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
	}
	handleMouseOver() {
		this.setState({
			url: 1
		});
	}
	handleMouseOut() {
		this.setState({
			url: 0
		});
	}
	render() {
		return(
			<span onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
				<Logo url={this.state.url}/>
			</span>
		);
	}
}

export default Wrapper;