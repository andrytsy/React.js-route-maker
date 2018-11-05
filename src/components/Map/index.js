import React, { Component } from 'react'
import { connect } from 'react-redux'
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
	
	render() {
		return <div id='map' className='map' />
	}

	componentDidMount() {
		Ymaps.ready(this.mapInit.bind(this))
	}

	mapInit() {
		this.map = new Ymaps.Map('map', mapSettings)
		this.group = new Ymaps.GeoObjectCollection()
		this.map.geoObjects.add(this.group)
	}

	componentDidUpdate(prevProps) {
		this.redrawMapObjects(prevProps.points)
	}

	redrawMapObjects(prevPointsArr) {
		let { points } = this.props
		let newPoint = points.find(item => item.geoObject === undefined)

		if (!newPoint && prevPointsArr && prevPointsArr.length !== points.length)
			this.deletePoint(prevPointsArr, points)

		newPoint && this.addPoint(newPoint)
		this.drawLine()
	}

	deletePoint(prevArr, currentArr) {
		let ids = currentArr.map(item => item.id)
		let point = prevArr.find(item => !~ids.indexOf(item.id) )

		point && this.group.remove(point.geoObject)
	}

	addPoint(point) {
		point.geoObject = this.getGeoObject(point.name)

		this.group.add(point.geoObject)
		this.initDragListener(point.geoObject)
	}

	getGeoObject(pointName) {
		return new Ymaps.GeoObject({
			geometry: {
				type: 'Point',
				coordinates: this.map.getCenter()
			},
			properties: {
				balloonContentHeader: pointName
			}
		}, {
			draggable: true 
		})
	}

	initDragListener(geoObject) {
		geoObject.events.add('dragend', () => this.redrawMapObjects())
	}

	drawLine() {
		let { points } = this.props

		this.line && this.group.remove(this.line)
		this.line = null
		
		if (points.length > 1) {
			let coords = points.map(point => point.geoObject.geometry.getCoordinates())

			this.line = new Ymaps.Polyline(coords)
			this.group.add(this.line)
		}
	}
}

export default connect(store => ({ points: store.points }), null)(Map)