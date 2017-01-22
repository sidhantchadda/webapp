import React, { Component } from 'react';
import Post from './Post'
class Project extends Component {
	render() {
		return(
			<div className="Project">
				<Post link="http://tinyurl.com/gmohwa2" title="Followers++" img={require('../Imgs/followers++.png')} description="Followers++ is a mobile Android application that discovers Twitter users that are likely to follow you back. This project utilizes the asynchronous android libraries and the Twitter api."/>
				<Post link="http://tinyurl.com/hwzu9hx" title="KitPvP" img={require('../Imgs/minecraft.png')} description="KitPvP is a minecraft server plugin that utilizes the bukkit api to build a structured kit based player vs player combat system inside minecraft. This project utilized my knowledge in data structures and algorithms to develop efficient server code."/>
			</div>
		);
	}
}

export default Project;