import React, { Component } from 'react';
import Post from './Post'
import data from '../Data/projectsData';
class Project extends Component {
	render() {
		let mapped = data.map((tableItem, i) => {
			return(
				<Post key={i} link={tableItem.link} title={tableItem.title} img={tableItem.image} description={tableItem.description} />
			);
		});
		return(
			<div className="Project">
				{mapped}
			</div>
		);
	}
}

export default Project;