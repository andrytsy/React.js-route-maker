import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatePoint } from '../../redux/actions'
import './index.styl'

const Ymaps = window.ymaps
const mapSettings = {
	center: [55.750625, 37.626],
	zoom: 7,
	controls: []
}

class Map extends Component {
	constructor() {
		super()

		this.map = null
		this.line = null
	}

	componentDidMount() {
		Ymaps.ready(this.mapInit.bind(this))
	}

	mapInit() {
		this.map = new Ymaps.Map('map', mapSettings)
		this.group = new Ymaps.GeoObjectCollection()
	}

	componentDidUpdate() {
		this.redrawGeoObjects(true)
	}

	redrawGeoObjects(isNeedAdd) {
		isNeedAdd && this.addPoint()
		this.drawLine()
		this.updateMapObjects()
	}

	addPoint() {
		let { points, updatePoint } = this.props 
		let point = points.find(item => item.geoObject === undefined)

		point.geoObject = this.getGeoObject()
		
		this.group.add(point.geoObject)
		this.initDragListener(point.geoObject)
		// updatePoint(point)
	}

	getGeoObject() {
		return new Ymaps.GeoObject({
			geometry: {
				type: 'Point',
				coordinates: this.map.getCenter()
			}
		}, {
			draggable: true 
		})
	}

	initDragListener(geoObject) {
		geoObject.events.add('dragend', () => this.redrawGeoObjects())
	}

	drawLine() {
		let { points } = this.props
		
		if (points.length > 1) {
			let coords = points.map(point => point.geoObject.geometry.getCoordinates())

			this.line && this.group.remove(this.line)
			this.line = new Ymaps.Polyline(coords)
			this.group.add(this.line)
		}
	}

	updateMapObjects() {
		this.map.geoObjects.removeAll()
		this.map.geoObjects.add(this.group)
	}


	render() {
		return <div id='map' className='map'></div>
	}
}

export default connect(store => ({ points: store.points }), {updatePoint})(Map)