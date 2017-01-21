import React, { Component } from 'react';
import './Post.css'
class Post extends Component {
	render() {
		let img = null;
		if(this.props.img != null) {

			img = <img src={this.props.img} className="Img" alt="Img" />
			console.log('test');
		}
		return(
			<div className="Post">
				<a href={this.props.link}>
					<div className="Tab">
						<div className="Title">
							{this.props.title}
						</div>
					</div>
					<div className="Img">
						{img}
					</div>
					<div className="Text">
						{this.props.description}
					</div>
				</a>
			</div>
		);
	}
}
export default Post;