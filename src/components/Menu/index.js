import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addPoint, removePoint } from '../../redux/actions'
import './index.styl';

class Menu extends Component {
    constructor() {
        super()

        this.state = {
            pointName: ''
        }
    }

    addPoint() {
        if (this.state.pointName.trim() === '') return null

        let newPoint = {
            id: 'point_' + new Date().getTime(),
            name: this.state.pointName.trim()
        }

        this.props.addPoint(newPoint)
        this.setState({pointName: ''})
    }

    render() {
        return (
            <div className='menu-container'>
                <div className='menu-container__input-block input-group'>
                    <input className='input-group__input' id='current-point-input'
                           value = {this.state.pointName}
                           onChange = {this.inputHandle.bind(this)}
                           onKeyUp = {this.pressEnterHandler.bind(this)}
                    />
                    <div className='input-group__btn' onClick = {this.addPoint.bind(this)}></div>
                </div>
                <ul className='menu-container__points points-group'>
                    {this.getPointsList()}
                </ul>
            </div>
        )
    }

    getPointsList() {
        const {points} = this.props;
        return points.map(point => (
            <li key = {point.id} className='points-group__item item-block'>
                <span className='item-block__text'>{point.name}</span> 
                <span className='item-block__btn' onClick = {this.removePoint.bind(this, point.id)}></span>
            </li>
        ))
    }

    removePoint(id) {
        this.props.removePoint(id)
    }

    inputHandle(event) {
        this.setState({pointName: event.target.value})
    }

    pressEnterHandler(event) {
        if (event.keyCode === 13 && this.state.pointName.trim())
            this.addPoint()
	};

}

export default connect(store => ({ points: store.points }), {addPoint, removePoint})(Menu)
