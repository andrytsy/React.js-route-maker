import React, { Component } from 'react';

import './index.styl';
import Map from '../Map';
import Menu from '../Menu';

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
