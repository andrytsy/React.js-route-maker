import React, { Component } from 'react';
import './index.styl';

export default class Map extends Component {
	constructor() {
		super()

		this.mapProps = {
			height: '480px',
			width: '640px'
		}
	}

	componentDidMount() {
		function init () {
			var multiRoute = new window.ymaps.multiRouter.MultiRoute({
				// Описание опорных точек мультимаршрута.
				referencePoints: [
					[55.734876, 37.59308],
					"Москва, ул. Мясницкая"
				],
				params: {
					// Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
					results: 3
				}
			}, {
				// Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
				boundsAutoApply: true
			});
		
			// Создаем карту с добавленными на нее кнопками.
			var myMap = new window.ymaps.Map('map', {
				center: [55.750625, 37.626],
				zoom: 7,
				controls: []
			});
		
			// Добавляем мультимаршрут на карту.
			myMap.geoObjects.add(multiRoute);

			new window.ymaps.SuggestView('current-point-input');
		}

		window.ymaps.ready(init);
	}

	render() {
		return (
			<div id="map" className="Map"></div>
		);
	}
}
