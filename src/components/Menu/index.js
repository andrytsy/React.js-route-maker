import React, { Component } from 'react'
import { connect } from 'react-redux'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc'
import { addPoint, removePoint, swapPoints } from '../../redux/actions'
import './index.styl'


const SortableItem = SortableElement(({point}) =>
    <span className='item-block__text'>{point.name}</span> 
)

const SortableList = SortableContainer(({points, onRemove}) => {
    return (
        <ul className='menu-container__points points-group'>
            {points.map((point, index) => (
                <li key={point.id}  className='points-group__item item-block'>
                    <SortableItem index={index} point={point} />
                    <span className='item-block__btn' onClick = {() => { onRemove(point.id)}}></span>
                </li>
            ))}
        </ul>
    )
})
class Menu extends Component {
    constructor() {
        super()

        this.state = {
            pointName: ''
        }
    }
    
    inputHandle(event) {
        this.setState({pointName: event.target.value})
    }

    pressEnterHandler(event) {
        if (event.keyCode === 13 && this.state.pointName.trim())
            this.addPoint()
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

    onSortEnd = ({oldIndex, newIndex}) => {
        const {points, swapPoints} = this.props

        swapPoints(arrayMove(points, oldIndex, newIndex))
    }

    render() {
        const {points, removePoint} = this.props

        return (
            <div className='menu-container'>
                <div className='menu-container__input-block input-group'>
                    <input className='input-group__input' id='current-point-input'
                           value = {this.state.pointName}
                           onChange = {this.inputHandle.bind(this)}
                           onKeyUp = {this.pressEnterHandler.bind(this)}
                    />
                    <div className='input-group__btn' onClick={this.addPoint.bind(this)}></div>
                </div>
                <SortableList points={points} onSortEnd={this.onSortEnd} onRemove={removePoint} />
            </div>
        )
    }
}

export default connect(store => ({ points: store.points }), {addPoint, removePoint, swapPoints})(Menu)
