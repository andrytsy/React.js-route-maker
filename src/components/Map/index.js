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
		this.state = {
			points: []
		// 	// points: new Ymaps.GeoObjectCollection()
		}
	}

	mapInit() {
		this.map = new Ymaps.Map('map', {
			center: [55.750625, 37.626],
			zoom: 7,
			controls: []
		});
	}

	componentDidMount() {
		console.log('---', this.props.points)
		// this.unsubscribe = Store.subscribe(() => this.setPoint())

		Ymaps.ready(this.mapInit.bind(this));
	}

	setPoint() {
		// this.setState({points: Store.getState()})
		// this.makeRoute()
	}

	makeRoute() {
		if (this.state.points.length < 2) return null
		
		let points = this.state.points.map(point => { return point.name })

		if (this.currentRoute)
			this.map.geoObjects.remove(this.currentRoute)

		this.currentRoute = new Ymaps.multiRouter.MultiRoute({
			referencePoints: points,
			params: { results: 3 }
		}, {
			wayPointDraggable: true,
			viaPointDraggable: true, 
			boundsAutoApply: true 
		})

		this.map.geoObjects.add(this.currentRoute)
		
		// this.map.getCenter()
		// this.map.addOverlay(this.addConnection(this.state.points, 1, 2));
	}

	addConnection(points, from, to) {
		return new Ymaps.Polyline([
			points.get(from).getGeoPoint(),
			points.get(to).getGeoPoint()
		])
	}

	render() {
		return (
			<div id='map' className='map'></div>
		);
	}
}

export default connect(store => ({ points: store.points }), {updatePoint})(Map)