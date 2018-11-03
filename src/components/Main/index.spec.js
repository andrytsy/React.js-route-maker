import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import Main from './index.js'
import Map from '../Map';
import PointsList from '../PointsList';

describe('Component > Main',()=>{
    const initialState = { points: [] }
    const mockStore = configureStore()
    let wrapper, store

    beforeEach(()=>{
        store = mockStore(initialState)
        wrapper = shallow(<Main store = {store} />)
    })

    it('+++ capturing snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('+++ render the connected component', () => {
        expect(wrapper.length).toEqual(1)
    })

    it('+++ contains child components', () => {
        expect(wrapper.contains(<PointsList />)).toBe(true);
        expect(wrapper.contains(<Map />)).toBe(true);
    });
})