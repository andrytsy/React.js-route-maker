import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePoint } from '../../redux/actions'
import './index.styl';

// import Store from '../../redux/store'

const Ymaps = window.ymaps
class Map extends Component {
	constructor() {
		super()

		this.map = null
	}

	mapInit() {
		this.map = new Ymaps.Map('map', {
			center: [55.750625, 37.626],
			zoom: 7,
			controls: []
		});

		this.group = new Ymaps.GeoObjectCollection();
	}

	componentDidMount() {
		Ymaps.ready(this.mapInit.bind(this));
	}

	setPoint() {
		let { points } = this.props 
		let point = points.find(item => item.coodinates === undefined)

		if (point) {
			point.coodinates = this.map.getCenter()
			this.props.updatePoint(point)

			this.group.add(new Ymaps.Placemark(point.coodinates))
			console.log('---', points)
			if (points.length > 1)
				this.makeRoute()
		}

		

	}

	makeRoute() {
		// let { points } = this.props 
		
		let points = [];
		this.group.forEach(function (obj) {
			points.push(obj.getGeoPoint());
		});

		// this.map.addOverlay(this.group);
		let polyline = new Ymaps.Polyline(points);
		this.map.addOverlay(polyline);

		// let coords = points.map(point => point.name)
		// this.map.addOverlay(this.addConnection(points, coords[0], coords[1]));
	}

	addConnection(points, from, to) {
		return new Ymaps.Polyline([
			points.get(from).getGeoPoint(),
			points.get(to).getGeoPoint()
		])
	}

	render() {
		this.setPoint()
		return (
			<div id='map' className='map'></div>
		);
	}
}

export default connect(store => ({ points: store.points }), {updatePoint})(Map)