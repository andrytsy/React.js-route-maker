import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import Map from './index.js'

const initialState = {}; 
const mockStore = configureStore();
let MapContainer;
let store;

const mapSettings = {
	center: [55.750625, 37.626],
	zoom: 7,
	controls: []
}

beforeEach(() => {
    store = mockStore(initialState)
    MapContainer = shallow(<Map store={store}/>)
})

describe('Map component', () => {
    it('map render', () => {
        expect(MapContainer.find('ymaps')).toHaveLength(0)
    })
})