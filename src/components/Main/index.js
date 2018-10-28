import React, { Component } from 'react';

import './index.styl';
import Map from '../Map';
import Menu from '../Menu';

export default class Main extends Component {
	constructor() {
		super()

		this.state = {
			points: [
				{name: 'test 1'},
				{name: 'test 2'}
			]
		}
	}

	render() {
		return (
			<div className="Main">
				<Menu points = {this.state.points} />
				<Map points = {this.state.points} />
			</div>
		);
	}
}
