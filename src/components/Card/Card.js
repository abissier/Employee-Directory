import React, { Component } from 'react';
import './style.css';

class Card extends Component {
	render() {
		return (
			<div>
				<div className="card">
					<img src={this.props.img} alt="user icon" className="img" />
					<h2>
						{this.props.firstName} {this.props.lastName}
					</h2>
					<ul>
						<li>
							<img src="https://img.icons8.com/metro/26/000000/globe.png" alt="globe" />
							{this.props.country}
						</li>
						<li>
							<img
								src="https://img.icons8.com/fluent-systems-filled/24/000000/username.png"
								alt="username"
							/>
							{this.props.username}
						</li>
						<li>
							<img src="https://img.icons8.com/material-rounded/24/000000/phone--v1.png" alt="phone" />
							{this.props.phone}
						</li>
						<li>
							<img src="https://img.icons8.com/material-rounded/24/000000/new-post.png" alt="email" />
							<a href={'mailto:' + this.props.email}>{this.props.email}</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Card;
