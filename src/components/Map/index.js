import React, { Component } from 'react';
import './index.styl';
import Store from '../../store'

export default class Map extends Component {
	constructor() {
		super()

		this.map = null
		this.state = {
			points: Store.getState()
		}

		this.mapProps = {
			height: '480px',
			width: '640px'
		}
	}

	mapInit() {
		this.map = new window.ymaps.Map('map', {
			center: [55.750625, 37.626],
			zoom: 7,
			controls: []
		});
	
		new window.ymaps.SuggestView('current-point-input');
	}

	componentDidMount() {
		this.unsubscribe = Store.subscribe(() => this.setState({points: Store.getState()}))
		Store.subscribe(() => this.makeRoute())

		window.ymaps.ready(this.mapInit.bind(this));
	}

	componentWillUnmount() {
		this.unsubscribe()
	}

	makeRoute() {
		if (this.state.points.length < 2) return null
		
		let points = this.state.points.map(point => { return point.name })

		if (this.currentRoute)
			this.map.geoObjects.remove(this.currentRoute)

		this.currentRoute = new window.ymaps.multiRouter.MultiRoute({
			referencePoints: points,
			params: { results: 3 }
		}, {
			wayPointDraggable: true,
			viaPointDraggable: true, 
			boundsAutoApply: true 
		})

		this.map.geoObjects.add(this.currentRoute)
	}

	render() {
		return (
			<div id='map' className='map'></div>
		);
	}
}
