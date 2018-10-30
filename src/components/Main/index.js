import React, { Component } from 'react';
import Map from '../Map';
import Menu from '../Menu';
import './index.styl';

export default class Main extends Component {
	render() {
		return (
			<div className="Main">
				<Menu />
				<Map />
			</div>
		);
	}
}
