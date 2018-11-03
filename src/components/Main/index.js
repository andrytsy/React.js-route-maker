import React, { Component } from 'react';
import Map from '../Map';
import PointsList from '../PointsList';
import './index.styl';

export default class Main extends Component {
	render() {
		return (
			<div className="Main">
				<PointsList />
				<Map />
			</div>
		);
	}
}
